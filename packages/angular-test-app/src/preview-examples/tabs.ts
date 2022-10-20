/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  styles: [
    `
      :host {
        .example {
          display: block;
          position: relative;
          width: 100%;
        }
      }
    `,
  ],
  template: `
    <div class="example">
      <ix-tabs [selected]="selectedTab">
        <ix-tab-item (click)="changeTab(0)">Tab 1</ix-tab-item>
        <ix-tab-item (click)="changeTab(1)">Tab 2</ix-tab-item>
        <ix-tab-item (click)="changeTab(2)">Tab 3</ix-tab-item>
      </ix-tabs>
      <div *ngIf="selectedTab === 0">Content Tab 1</div>
      <div *ngIf="selectedTab === 1">Content Tab 2</div>
      <div *ngIf="selectedTab === 2">Content Tab 3</div>
    </div>
  `,
})
export class Tabs {
  selectedTab = 1;

  changeTab(tabIndex: number) {
    this.selectedTab = tabIndex;
  }
}
