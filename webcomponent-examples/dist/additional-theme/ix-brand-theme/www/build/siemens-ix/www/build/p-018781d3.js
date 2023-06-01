import { B as BUILD, c as consoleDevInfo, p as plt, w as win, H, d as doc, N as NAMESPACE, a as promiseResolve, b as bootstrapLazy } from './index-98ecdc5a.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Browser v2.19.3 | MIT Licensed | https://stenciljs.com
 */
const getDynamicImportFunction = (namespace) => `__sc_import_${namespace.replace(/\s|-/g, '_')}`;
const patchBrowser = () => {
    // NOTE!! This fn cannot use async/await!
    if (BUILD.isDev && !BUILD.isTesting) {
        consoleDevInfo('Running in development mode.');
    }
    if (BUILD.cssVarShim) {
        // shim css vars
        plt.$cssShim$ = win.__cssshim;
    }
    if (BUILD.cloneNodeFix) {
        // opted-in to polyfill cloneNode() for slot polyfilled components
        patchCloneNodeFix(H.prototype);
    }
    if (BUILD.profile && !performance.mark) {
        // not all browsers support performance.mark/measure (Safari 10)
        // because the mark/measure APIs are designed to write entries to a buffer in the browser that does not exist,
        // simply stub the implementations out.
        // TODO(STENCIL-323): Remove this patch when support for older browsers is removed (breaking)
        // @ts-ignore
        performance.mark = performance.measure = () => {
            /*noop*/
        };
        performance.getEntriesByName = () => [];
    }
    // @ts-ignore
    const scriptElm = BUILD.scriptDataOpts || BUILD.safari10 || BUILD.dynamicImportShim
        ? Array.from(doc.querySelectorAll('script')).find((s) => new RegExp(`\/${NAMESPACE}(\\.esm)?\\.js($|\\?|#)`).test(s.src) ||
            s.getAttribute('data-stencil-namespace') === NAMESPACE)
        : null;
    const importMeta = import.meta.url;
    const opts = BUILD.scriptDataOpts ? scriptElm['data-opts'] || {} : {};
    if (BUILD.safari10 && 'onbeforeload' in scriptElm && !history.scrollRestoration /* IS_ESM_BUILD */) {
        // Safari < v11 support: This IF is true if it's Safari below v11.
        // This fn cannot use async/await since Safari didn't support it until v11,
        // however, Safari 10 did support modules. Safari 10 also didn't support "nomodule",
        // so both the ESM file and nomodule file would get downloaded. Only Safari
        // has 'onbeforeload' in the script, and "history.scrollRestoration" was added
        // to Safari in v11. Return a noop then() so the async/await ESM code doesn't continue.
        // IS_ESM_BUILD is replaced at build time so this check doesn't happen in systemjs builds.
        return {
            then() {
                /* promise noop */
            },
        };
    }
    if (!BUILD.safari10 && importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    else if (BUILD.dynamicImportShim || BUILD.safari10) {
        opts.resourcesUrl = new URL('.', new URL(scriptElm.getAttribute('data-resources-url') || scriptElm.src, win.location.href)).href;
        if (BUILD.dynamicImportShim) {
            patchDynamicImport(opts.resourcesUrl, scriptElm);
        }
        if (BUILD.dynamicImportShim && !win.customElements) {
            // module support, but no custom elements support (Old Edge)
            // @ts-ignore
            return import(/* webpackChunkName: "polyfills-dom" */ './dom-1b0cf05d.js').then(() => opts);
        }
    }
    return promiseResolve(opts);
};
const patchDynamicImport = (base, orgScriptElm) => {
    const importFunctionName = getDynamicImportFunction(NAMESPACE);
    try {
        // test if this browser supports dynamic imports
        // There is a caching issue in V8, that breaks using import() in Function
        // By generating a random string, we can workaround it
        // Check https://bugs.chromium.org/p/chromium/issues/detail?id=990810 for more info
        win[importFunctionName] = new Function('w', `return import(w);//${Math.random()}`);
    }
    catch (e) {
        // this shim is specifically for browsers that do support "esm" imports
        // however, they do NOT support "dynamic" imports
        // basically this code is for old Edge, v18 and below
        const moduleMap = new Map();
        win[importFunctionName] = (src) => {
            const url = new URL(src, base).href;
            let mod = moduleMap.get(url);
            if (!mod) {
                const script = doc.createElement('script');
                script.type = 'module';
                script.crossOrigin = orgScriptElm.crossOrigin;
                script.src = URL.createObjectURL(new Blob([`import * as m from '${url}'; window.${importFunctionName}.m = m;`], {
                    type: 'application/javascript',
                }));
                mod = new Promise((resolve) => {
                    script.onload = () => {
                        resolve(win[importFunctionName].m);
                        script.remove();
                    };
                });
                moduleMap.set(url, mod);
                doc.head.appendChild(script);
            }
            return mod;
        };
    }
};
const patchCloneNodeFix = (HTMLElementPrototype) => {
    const nativeCloneNodeFn = HTMLElementPrototype.cloneNode;
    HTMLElementPrototype.cloneNode = function (deep) {
        if (this.nodeName === 'TEMPLATE') {
            return nativeCloneNodeFn.call(this, deep);
        }
        const clonedNode = nativeCloneNodeFn.call(this, false);
        const srcChildNodes = this.childNodes;
        if (deep) {
            for (let i = 0; i < srcChildNodes.length; i++) {
                // Node.ATTRIBUTE_NODE === 2, and checking because IE11
                if (srcChildNodes[i].nodeType !== 2) {
                    clonedNode.appendChild(srcChildNodes[i].cloneNode(true));
                }
            }
        }
        return clonedNode;
    };
};

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy(JSON.parse("[[\"ix-datetime-picker\",[[2,\"ix-datetime-picker\",{\"range\":[4],\"showHour\":[4,\"show-hour\"],\"showMinutes\":[4,\"show-minutes\"],\"showSeconds\":[4,\"show-seconds\"],\"minDate\":[1,\"min-date\"],\"maxDate\":[1,\"max-date\"],\"dateFormat\":[1,\"date-format\"],\"timeFormat\":[1,\"time-format\"],\"from\":[1],\"to\":[1],\"time\":[1],\"showTimeReference\":[8,\"show-time-reference\"],\"eventDelimiter\":[1,\"event-delimiter\"],\"timeReference\":[1,\"time-reference\"],\"textSelectDate\":[1,\"text-select-date\"]}]]],[\"ix-select\",[[6,\"ix-select\",{\"selectedIndices\":[1025,\"selected-indices\"],\"allowClear\":[4,\"allow-clear\"],\"mode\":[1],\"editable\":[4],\"disabled\":[4],\"readonly\":[4],\"i18nPlaceholder\":[1,\"i-1-8n-placeholder\"],\"i18nPlaceholderEditable\":[1,\"i-1-8n-placeholder-editable\"],\"i18nSelectListHeader\":[1,\"i-1-8n-select-list-header\"],\"dropdownShow\":[32],\"value\":[32],\"dropdownWrapperRef\":[32],\"dropdownAnchor\":[32],\"isDropdownEmpty\":[32],\"hasFocus\":[32],\"navigationItem\":[32],\"inputFilterText\":[32],\"inputValue\":[32]},[[0,\"itemClick\",\"onItemClicked\"],[0,\"ix-select-item:labelChange\",\"onLabelChange\"],[8,\"keydown\",\"onKeyDown\"]]]]],[\"ix-modal-example\",[[0,\"ix-modal-example\"]]],[\"ix-dropdown-button\",[[6,\"ix-dropdown-button\",{\"variant\":[1],\"outline\":[4],\"ghost\":[4],\"active\":[4],\"disabled\":[4],\"label\":[1],\"icon\":[1],\"dropdownAnchor\":[32]}]]],[\"ix-group\",[[6,\"ix-group\",{\"suppressHeaderSelection\":[4,\"suppress-header-selection\"],\"header\":[1],\"subHeader\":[1,\"sub-header\"],\"collapsed\":[1540],\"selected\":[1540],\"index\":[1538],\"expandOnHeaderClick\":[4,\"expand-on-header-click\"],\"dropdownTriggerRef\":[32]},[[8,\"keydown\",\"onKeyDown\"]]]]],[\"ix-map-navigation\",[[6,\"ix-map-navigation\",{\"applicationName\":[1,\"application-name\"],\"navigationTitle\":[1,\"navigation-title\"],\"hideContextMenu\":[4,\"hide-context-menu\"],\"isSidebarOpen\":[32],\"openOverlay\":[64],\"closeOverlay\":[64]}]]],[\"ix-menu-about\",[[6,\"ix-menu-about\",{\"activeTabLabel\":[1025,\"active-tab-label\"],\"label\":[1],\"show\":[4],\"labels\":[32]}]]],[\"ix-menu-avatar\",[[6,\"ix-menu-avatar\",{\"top\":[1],\"bottom\":[1],\"i18nLogout\":[1,\"i-1-8n-logout\"]}]]],[\"ix-menu-settings\",[[6,\"ix-menu-settings\",{\"activeTabLabel\":[1025,\"active-tab-label\"],\"label\":[1],\"show\":[4]}]]],[\"my-component\",[[2,\"my-component\"]]],[\"ix-breadcrumb\",[[6,\"ix-breadcrumb\",{\"visibleItemCount\":[2,\"visible-item-count\"],\"nextItems\":[16],\"ghost\":[4],\"previousButtonRef\":[32],\"nextButtonRef\":[32],\"items\":[32]}]]],[\"ix-category-filter\",[[2,\"ix-category-filter\",{\"initialState\":[16],\"filterState\":[16],\"placeholder\":[1],\"categories\":[16],\"nonSelectableCategories\":[16],\"suggestions\":[16],\"icon\":[1],\"hideIcon\":[4,\"hide-icon\"],\"repeatCategories\":[4,\"repeat-categories\"],\"tmpDisableScrollIntoView\":[4,\"tmp-disable-scroll-into-view\"],\"labelCategories\":[1,\"label-categories\"],\"i18nPlainText\":[1,\"i-1-8n-plain-text\"],\"hasFocus\":[32],\"showCategorySelection\":[32],\"categoryLogicalOperator\":[32],\"inputValue\":[32],\"category\":[32],\"filterTokens\":[32],\"offsetDropdownX\":[32],\"offsetDropdownY\":[32],\"maxHeightDropdown\":[32],\"maxWidthDropdown\":[32]},[[9,\"resize\",\"setDropdownOffset\"]]]]],[\"ix-toast-container\",[[2,\"ix-toast-container\",{\"containerId\":[1,\"container-id\"],\"containerClass\":[1,\"container-class\"],\"position\":[1],\"showToast\":[64]}]]],[\"ix-drawer\",[[6,\"ix-drawer\",{\"show\":[1028],\"closeOnClickOutside\":[4,\"close-on-click-outside\"],\"fullHeight\":[4,\"full-height\"],\"minWidth\":[2,\"min-width\"],\"maxWidth\":[2,\"max-width\"],\"width\":[8],\"toggleDrawer\":[64]}]]],[\"ix-expanding-search\",[[2,\"ix-expanding-search\",{\"icon\":[1],\"placeholder\":[1],\"value\":[1025],\"isFieldChanged\":[32],\"expanded\":[32],\"hasFocus\":[32]}]]],[\"ix-flip-tile\",[[6,\"ix-flip-tile\",{\"state\":[1],\"footer\":[1],\"index\":[32],\"isFlipAnimationActive\":[32]}]]],[\"ix-group-dropdown-item\",[[6,\"ix-group-dropdown-item\",{\"label\":[1],\"icon\":[1]}]]],[\"ix-menu\",[[4,\"ix-menu\",{\"showSettings\":[1028,\"show-settings\"],\"showAbout\":[1028,\"show-about\"],\"enableToggleTheme\":[4,\"enable-toggle-theme\"],\"enableSettings\":[4,\"enable-settings\"],\"enableMapExpand\":[4,\"enable-map-expand\"],\"applicationName\":[1,\"application-name\"],\"applicationDescription\":[1,\"application-description\"],\"maxVisibleMenuItems\":[2,\"max-visible-menu-items\"],\"i18nLegal\":[1,\"i-1-8n-legal\"],\"i18nSettings\":[1,\"i-1-8n-settings\"],\"i18nToggleTheme\":[1,\"i-1-8n-toggle-theme\"],\"i18nExpand\":[1,\"i-1-8n-expand\"],\"i18nCollapse\":[1,\"i-1-8n-collapse\"],\"i18nMore\":[1,\"i-1-8n-more\"],\"expand\":[1540],\"showMoreItems\":[32],\"visibleMenuItems\":[32],\"countMoreNotifications\":[32],\"mapExpand\":[32],\"activeTab\":[32],\"isMoreTabEmpty\":[32],\"toggleMapExpand\":[64],\"toggleMenu\":[64],\"toggleSettings\":[64],\"toggleAbout\":[64]},[[9,\"resize\",\"onWindowResize\"]]]]],[\"ix-menu-about-news\",[[6,\"ix-menu-about-news\",{\"show\":[1540],\"label\":[1],\"i18nShowMore\":[1,\"i-1-8n-show-more\"],\"aboutItemLabel\":[1,\"about-item-label\"],\"offsetBottom\":[2,\"offset-bottom\"],\"expanded\":[4]}]]],[\"ix-message-bar\",[[6,\"ix-message-bar\",{\"type\":[1],\"dismissible\":[4],\"icon\":[32],\"color\":[32]}]]],[\"ix-split-button\",[[6,\"ix-split-button\",{\"variant\":[1],\"outline\":[4],\"invisible\":[4],\"ghost\":[4],\"label\":[1],\"icon\":[1],\"splitIcon\":[1,\"split-icon\"],\"disabled\":[4],\"placement\":[1],\"toggle\":[32]}]]],[\"ix-split-button-item\",[[2,\"ix-split-button-item\",{\"icon\":[1],\"label\":[1]}]]],[\"ix-tree\",[[6,\"ix-tree\",{\"root\":[1],\"model\":[16],\"renderItem\":[16],\"context\":[1040]}]]],[\"ix-upload\",[[2,\"ix-upload\",{\"accept\":[1],\"multiple\":[4],\"multiline\":[4],\"disabled\":[4],\"state\":[1],\"selectFileText\":[1,\"select-file-text\"],\"loadingText\":[1,\"loading-text\"],\"uploadFailedText\":[1,\"upload-failed-text\"],\"uploadSuccessText\":[1,\"upload-success-text\"],\"i18nUploadFile\":[1,\"i-1-8n-upload-file\"],\"i18nUploadDisabled\":[1,\"i-1-8n-upload-disabled\"],\"isFileOver\":[32],\"setFilesToUpload\":[64]}]]],[\"ix-animated-tabs\",[[6,\"ix-animated-tabs\",{\"disableAnimations\":[4,\"disable-animations\"],\"selectedIndex\":[2,\"selected-index\"],\"tabPlacement\":[1,\"tab-placement\"],\"tabs\":[32],\"activeIndex\":[32]},[[1,\"mouseup\",\"onMouseDown\"]]]]],[\"ix-basic-navigation\",[[6,\"ix-basic-navigation\",{\"applicationName\":[1,\"application-name\"],\"hideHeader\":[4,\"hide-header\"]}]]],[\"ix-chip\",[[6,\"ix-chip\",{\"variant\":[513],\"active\":[4],\"closable\":[4],\"icon\":[1],\"background\":[1],\"color\":[1],\"outline\":[4]}]]],[\"ix-kpi\",[[2,\"ix-kpi\",{\"label\":[1],\"value\":[8],\"unit\":[1],\"state\":[1],\"orientation\":[1]}]]],[\"ix-pill\",[[6,\"ix-pill\",{\"variant\":[513],\"outline\":[4],\"icon\":[1],\"background\":[1],\"color\":[1],\"alignLeft\":[4,\"align-left\"]}]]],[\"ix-workflow-step\",[[6,\"ix-workflow-step\",{\"vertical\":[4],\"disabled\":[4],\"status\":[1],\"clickable\":[4],\"selected\":[1028],\"position\":[1],\"iconName\":[32],\"iconColor\":[32]}]]],[\"ix-animated-tab\",[[6,\"ix-animated-tab\",{\"icon\":[1],\"count\":[514]}]]],[\"ix-blind\",[[6,\"ix-blind\",{\"collapsed\":[1540],\"label\":[1]}]]],[\"ix-breadcrumb-item\",[[6,\"ix-breadcrumb-item\",{\"label\":[1],\"icon\":[1]}]]],[\"ix-counter-pill\",[[6,\"ix-counter-pill\",{\"variant\":[513],\"outline\":[4],\"background\":[1],\"color\":[1],\"alignLeft\":[4,\"align-left\"]}]]],[\"ix-event-list\",[[6,\"ix-event-list\",{\"itemHeight\":[8,\"item-height\"],\"compact\":[4],\"animated\":[4],\"chevron\":[4]}]]],[\"ix-event-list-item\",[[4,\"ix-event-list-item\",{\"color\":[1],\"selected\":[4],\"disabled\":[4],\"chevron\":[4],\"opacity\":[2]},[[1,\"click\",\"handleItemClick\"]]]]],[\"ix-flip-tile-content\",[[1,\"ix-flip-tile-content\"]]],[\"ix-input-group\",[[6,\"ix-input-group\"]]],[\"ix-menu-about-item\",[[6,\"ix-menu-about-item\",{\"label\":[513]}]]],[\"ix-menu-settings-item\",[[6,\"ix-menu-settings-item\",{\"label\":[1]}]]],[\"ix-tile\",[[6,\"ix-tile\",{\"size\":[1]}]]],[\"ix-toggle\",[[2,\"ix-toggle\",{\"checked\":[1540],\"disabled\":[4],\"indeterminate\":[4],\"color\":[1],\"textOn\":[1,\"text-on\"],\"textOff\":[1,\"text-off\"],\"textIndeterminate\":[1,\"text-indeterminate\"],\"hideText\":[4,\"hide-text\"]},[[8,\"keydown\",\"onKeyDown\"]]]]],[\"ix-validation-tooltip\",[[6,\"ix-validation-tooltip\",{\"message\":[1],\"placement\":[1],\"isInputValid\":[32],\"tooltipPosition\":[32],\"arrowPosition\":[32]}]]],[\"ix-workflow-steps\",[[6,\"ix-workflow-steps\",{\"vertical\":[4],\"linear\":[4],\"clickable\":[4],\"selectedIndex\":[2,\"selected-index\"]}]]],[\"ix-icon\",[[6,\"ix-icon\",{\"size\":[1],\"color\":[1],\"name\":[513]}]]],[\"ix-date-picker\",[[2,\"ix-date-picker\",{\"format\":[1],\"range\":[4],\"individual\":[4],\"corners\":[1],\"from\":[1],\"to\":[1],\"minDate\":[1,\"min-date\"],\"maxDate\":[1,\"max-date\"],\"eventDelimiter\":[1,\"event-delimiter\"],\"textSelectDate\":[1,\"text-select-date\"],\"yearValue\":[32],\"today\":[32],\"monthValue\":[32],\"calendar\":[32],\"years\":[32],\"tempYear\":[32],\"tempMonth\":[32],\"start\":[32],\"end\":[32],\"dropdownButtonRef\":[32],\"yearContainerRef\":[32],\"getCurrentDate\":[64]}]]],[\"ix-time-picker\",[[2,\"ix-time-picker\",{\"format\":[1],\"corners\":[1],\"individual\":[4],\"showHour\":[4,\"show-hour\"],\"showMinutes\":[4,\"show-minutes\"],\"showSeconds\":[4,\"show-seconds\"],\"time\":[1],\"showTimeReference\":[1032,\"show-time-reference\"],\"timeReference\":[1,\"time-reference\"],\"textSelectTime\":[1,\"text-select-time\"],\"hourInputRef\":[32],\"minuteInputRef\":[32],\"secondInputRef\":[32],\"referenceInputRef\":[32],\"getCurrentTime\":[64]}]]],[\"ix-group-context-menu\",[[6,\"ix-group-context-menu\",{\"showContextMenu\":[32]}]]],[\"ix-map-navigation-overlay\",[[6,\"ix-map-navigation-overlay\",{\"name\":[1],\"icon\":[1],\"color\":[1]}]]],[\"ix-dropdown-item\",[[6,\"ix-dropdown-item\",{\"label\":[1],\"icon\":[1],\"hover\":[4],\"disabled\":[4],\"checked\":[4],\"emitItemClick\":[64]}]]],[\"ix-menu-avatar-item\",[[2,\"ix-menu-avatar-item\",{\"icon\":[1],\"label\":[1]}]]],[\"ix-modal-container\",[[2,\"ix-modal-container\",{\"showModal\":[64]}]]],[\"ix-select-item\",[[2,\"ix-select-item\",{\"label\":[513],\"value\":[520],\"selected\":[4],\"hover\":[4],\"onItemClick\":[64]}]]],[\"ix-toast\",[[6,\"ix-toast\",{\"type\":[1],\"toastTitle\":[1,\"toast-title\"],\"autoCloseDelay\":[2,\"auto-close-delay\"],\"autoClose\":[4,\"auto-close\"],\"icon\":[1],\"iconColor\":[1,\"icon-color\"],\"progress\":[32],\"isRunning\":[32],\"touched\":[32]}]]],[\"ix-tooltip\",[[1,\"ix-tooltip\",{\"for\":[1],\"interactive\":[4],\"titleContent\":[1,\"title-content\"],\"titleIcon\":[1,\"title-icon\"],\"visible\":[32]}]]],[\"ix-group-item\",[[6,\"ix-group-item\",{\"icon\":[1],\"text\":[1],\"secondaryText\":[1,\"secondary-text\"],\"suppressSelection\":[4,\"suppress-selection\"],\"selected\":[4],\"focusable\":[4],\"index\":[2]},[[1,\"click\",\"clickListen\"]]]]],[\"ix-tree-item\",[[6,\"ix-tree-item\",{\"text\":[1],\"hasChildren\":[4,\"has-children\"],\"context\":[16]}]]],[\"ix-menu-item\",[[4,\"ix-menu-item\",{\"home\":[4],\"bottom\":[4],\"tabIcon\":[1,\"tab-icon\"],\"notifications\":[2],\"active\":[4],\"disabled\":[4],\"title\":[32]}]]],[\"ix-spinner\",[[2,\"ix-spinner\",{\"variant\":[1],\"size\":[1]}]]],[\"ix-filter-chip\",[[6,\"ix-filter-chip\",{\"disabled\":[4]}]]],[\"ix-modal\",[[6,\"ix-modal\",{\"animation\":[4],\"ariaDescribedBy\":[1,\"aria-described-by\"],\"ariaLabelledBy\":[1,\"aria-labelled-by\"],\"backdrop\":[8],\"backdropClass\":[1,\"backdrop-class\"],\"beforeDismiss\":[16],\"centered\":[4],\"content\":[1],\"keyboard\":[4],\"icon\":[1],\"iconColor\":[1,\"icon-color\"],\"modalDialogClass\":[1,\"modal-dialog-class\"],\"scrollable\":[4],\"size\":[1],\"headerTitle\":[1,\"header-title\"],\"windowClass\":[1,\"window-class\"],\"dismiss\":[64],\"close\":[64]}]]],[\"ix-application-header\",[[1,\"ix-application-header\",{\"name\":[1]}]]],[\"ix-tab-item\",[[4,\"ix-tab-item\",{\"selected\":[4],\"disabled\":[4],\"small\":[4],\"icon\":[4],\"rounded\":[4],\"counter\":[2],\"layout\":[1],\"placement\":[1]}]]],[\"ix-tabs\",[[4,\"ix-tabs\",{\"small\":[4],\"rounded\":[4],\"selected\":[1026],\"layout\":[1],\"placement\":[1],\"totalItems\":[32],\"currentScrollAmount\":[32],\"scrollAmount\":[32],\"scrollActionAmount\":[32]},[[9,\"resize\",\"onWindowResize\"]]]]],[\"ix-typography\",[[1,\"ix-typography\",{\"variant\":[1]}]]],[\"ix-date-time-card\",[[6,\"ix-date-time-card\",{\"individual\":[4],\"corners\":[1]}]]],[\"ix-button\",[[6,\"ix-button\",{\"variant\":[1],\"outline\":[4],\"invisible\":[4],\"ghost\":[4],\"selected\":[4],\"disabled\":[516],\"type\":[1]}]]],[\"ix-dropdown\",[[1,\"ix-dropdown\",{\"show\":[1540],\"trigger\":[1],\"anchor\":[1],\"closeBehavior\":[8,\"close-behavior\"],\"placement\":[1],\"positioningStrategy\":[1,\"positioning-strategy\"],\"adjustDropdownWidthToReferenceWith\":[4,\"adjust-dropdown-width-to-reference-with\"],\"adjustDropdownWidthToReferenceWidth\":[4,\"adjust-dropdown-width-to-reference-width\"],\"header\":[1],\"offset\":[16],\"updatePosition\":[64]},[[8,\"click\",\"clickOutside\"]]]]],[\"ix-icon-button\",[[6,\"ix-icon-button\",{\"variant\":[1],\"outline\":[4],\"invisible\":[4],\"ghost\":[4],\"oval\":[4],\"icon\":[1],\"size\":[1],\"color\":[1],\"selected\":[4],\"disabled\":[4],\"type\":[1]}]]]]"), options);
});
