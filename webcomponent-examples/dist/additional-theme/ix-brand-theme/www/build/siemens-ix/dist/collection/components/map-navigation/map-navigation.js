/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host, } from '@stencil/core';
import anime from 'animejs';
export class MapNavigation {
  constructor() {
    this.applicationName = undefined;
    this.navigationTitle = undefined;
    this.hideContextMenu = true;
    this.isSidebarOpen = true;
  }
  get menu() {
    return this.hostElement.querySelector('ix-menu');
  }
  get menuOverlay() {
    return this.hostElement.querySelector('ix-menu-overlay');
  }
  get mapNavMenu() {
    return this.hostElement.querySelector('.map-nav-menu');
  }
  get sidebar() {
    return this.hostElement.querySelector('.map-nav-sidebar');
  }
  get overlay() {
    return this.hostElement.querySelector('#overlay');
  }
  componentDidRender() {
    this.appendMenu();
    this.closeOverlay();
  }
  appendMenu() {
    this.hostElement.querySelector('#menu-placeholder').appendChild(this.menu);
    this.menu.addEventListener('mapExpandChange', (event) => {
      const state = !event.detail;
      this.toggleSidebar(state);
      this.menu.toggleMapExpand(state);
    });
    this.menu.enableMapExpand = true;
  }
  toggleSidebar(show) {
    if (show !== undefined) {
      this.isSidebarOpen = show;
    }
    else {
      this.isSidebarOpen = !this.isSidebarOpen;
    }
    if (show) {
      this.openSidebar();
    }
    else {
      this.closeSidebar();
    }
    this.navigationToggled.emit(this.isSidebarOpen);
  }
  closeSidebar() {
    anime({
      targets: this.sidebar,
      duration: MapNavigation.defaultTime,
      marginLeft: [0, '-29.75rem'],
      opacity: [1, 0],
      easing: 'easeInSine',
      complete: () => {
        this.sidebar.classList.add('d-none');
      },
    });
  }
  openSidebar() {
    anime({
      targets: this.sidebar,
      duration: MapNavigation.defaultTime,
      marginLeft: ['-29.75rem', 0],
      opacity: [0, 1],
      easing: 'easeOutSine',
      begin: () => {
        this.sidebar.classList.remove('d-none');
      },
    });
  }
  /**
   * Open a overlay inside content area
   * @deprecated Will be removed in 2.0.0. Use slot based approach
   *
   * @param name
   * @param component
   * @param icon
   * @param color
   */
  async openOverlay(name, component, icon, color) {
    anime({
      targets: this.overlay,
      duration: MapNavigation.slowTime,
      backdropFilter: [0, 'blur(1rem)'],
      translateX: ['-4rem', 0],
      opacity: [0, 1],
      easing: 'easeOutSine',
      begin: () => {
        this.overlay.classList.remove('d-none');
      },
    });
    const overlayInstance = document.createElement('ix-map-navigation-overlay');
    overlayInstance.setAttribute('color', color);
    overlayInstance.setAttribute('name', name);
    overlayInstance.setAttribute('icon', icon);
    overlayInstance.setAttribute('slot', 'overlay');
    overlayInstance.addEventListener('closeClick', () => this.closeOverlay());
    overlayInstance.appendChild(component);
    this.hostElement.appendChild(overlayInstance);
  }
  /**
   * Close current shown overlay
   * @deprecated Will be removed in 2.0.0. Use slot based approach
   */
  async closeOverlay() {
    anime({
      targets: this.overlay,
      duration: MapNavigation.slowTime,
      backdropFilter: ['blur(1rem)', 0],
      translateX: [0, '-4rem'],
      opacity: [1, 0],
      easing: 'easeInSine',
      complete: () => {
        var _a;
        if (!this.overlay) {
          return;
        }
        (_a = this.overlay.firstChild) === null || _a === void 0 ? void 0 : _a.remove();
        this.overlay.classList.add('d-none');
      },
    });
  }
  render() {
    return (h(Host, null, h("div", { id: "menu-placeholder" }), h("div", { class: "map-nav" }, h("div", { class: "map-nav-sidebar" }, h("div", { class: "map-nav-header" }, h("ix-application-header", { name: this.applicationName, class: "map-nav-header-brand" }, h("slot", { name: "logo" }))), h("div", { class: "map-nav-sidebar-content" }, h("div", { class: "map-nav-sidebar-static-content" }, h("div", { class: "map-nav-title" }, this.navigationTitle), this.hideContextMenu ? ('') : (h("ix-icon-button", { icon: "context-menu", ghost: true, size: "24", variant: "Secondary", onClick: (_) => this.contextMenuClick.emit() }))), h("div", { class: "map-nav-sidebar-user-content" }, h("slot", { name: "sidebar-content" })))), h("div", { class: "content" }, h("div", { class: "map-nav-header-content bg-2" }, h("slot", { name: "content-header" })), h("main", null, h("slot", null), h("slot", { name: "overlay" }))))));
  }
  static get is() { return "ix-map-navigation"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["map-navigation.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["map-navigation.css"]
    };
  }
  static get properties() {
    return {
      "applicationName": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Application name"
        },
        "attribute": "application-name",
        "reflect": false
      },
      "navigationTitle": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Navigation title"
        },
        "attribute": "navigation-title",
        "reflect": false
      },
      "hideContextMenu": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Hide the sidebar context menu button when set to true"
        },
        "attribute": "hide-context-menu",
        "reflect": false,
        "defaultValue": "true"
      }
    };
  }
  static get states() {
    return {
      "isSidebarOpen": {}
    };
  }
  static get events() {
    return [{
        "method": "navigationToggled",
        "name": "navigationToggled",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Navigation toggled"
        },
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        }
      }, {
        "method": "contextMenuClick",
        "name": "contextMenuClick",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Context menu clicked"
        },
        "complexType": {
          "original": "void",
          "resolved": "void",
          "references": {}
        }
      }];
  }
  static get methods() {
    return {
      "openOverlay": {
        "complexType": {
          "signature": "(name: string, component: HTMLElement, icon?: string, color?: string) => Promise<void>",
          "parameters": [{
              "tags": [{
                  "name": "param",
                  "text": "name"
                }],
              "text": ""
            }, {
              "tags": [{
                  "name": "param",
                  "text": "component"
                }],
              "text": ""
            }, {
              "tags": [{
                  "name": "param",
                  "text": "icon"
                }],
              "text": ""
            }, {
              "tags": [{
                  "name": "param",
                  "text": "color"
                }],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            },
            "HTMLElement": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Open a overlay inside content area",
          "tags": [{
              "name": "deprecated",
              "text": "Will be removed in 2.0.0. Use slot based approach"
            }, {
              "name": "param",
              "text": "name"
            }, {
              "name": "param",
              "text": "component"
            }, {
              "name": "param",
              "text": "icon"
            }, {
              "name": "param",
              "text": "color"
            }]
        }
      },
      "closeOverlay": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Close current shown overlay",
          "tags": [{
              "name": "deprecated",
              "text": "Will be removed in 2.0.0. Use slot based approach"
            }]
        }
      }
    };
  }
  static get elementRef() { return "hostElement"; }
}
MapNavigation.defaultTime = 150;
MapNavigation.slowTime = 500;
