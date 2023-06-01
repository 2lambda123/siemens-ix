import { r as registerInstance, h, H as Host } from './index-6f4f3582.js';

const iconCss = "@font-face{font-family:\"ix-icons\";src:url('../fonts/ix-icons.eot');src:url('../fonts/ix-icons.eot?#iefix') format('eot'),\n    url('../fonts/ix-icons.woff2') format('woff2'),\n    url('../fonts/ix-icons.woff') format('woff'),\n    url('../fonts/ix-icons.ttf') format('truetype'),\n    url('../fonts/ix-icons.svg#ix-icons') format('svg');font-weight:normal;font-style:normal}.glyph.sc-ix-icon{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-block;font-style:normal;font-variant:normal;text-rendering:auto;line-height:1;font-family:\"ix-icons\";font-size:1.5rem;font-weight:500}.glyph-lg.sc-ix-icon{font-size:1.3333333333333333em;line-height:0.75em;vertical-align:-15%}.glyph-2x.sc-ix-icon{font-size:2em}.glyph-3x.sc-ix-icon{font-size:3em}.glyph-4x.sc-ix-icon{font-size:4em}.glyph-5x.sc-ix-icon{font-size:5em}.glyph-fw.sc-ix-icon{width:1.2857142857142858em;text-align:center}.glyph-12.sc-ix-icon{font-size:0.75rem}.glyph-16.sc-ix-icon{font-size:1rem}.glyph-24.sc-ix-icon{font-size:1.5rem}.glyph-32.sc-ix-icon{font-size:2rem}.glyph-about-filled.sc-ix-icon:before{content:\"\\EA01\"}.glyph-about.sc-ix-icon:before{content:\"\\EA02\"}.glyph-add-circle-filled.sc-ix-icon:before{content:\"\\EA03\"}.glyph-add-circle.sc-ix-icon:before{content:\"\\EA04\"}.glyph-add-document-note.sc-ix-icon:before{content:\"\\EA05\"}.glyph-add-eye-filled.sc-ix-icon:before{content:\"\\EA06\"}.glyph-add-eye.sc-ix-icon:before{content:\"\\EA07\"}.glyph-add-task-list.sc-ix-icon:before{content:\"\\EA08\"}.glyph-add-task.sc-ix-icon:before{content:\"\\EA09\"}.glyph-add.sc-ix-icon:before{content:\"\\EA0A\"}.glyph-ai.sc-ix-icon:before{content:\"\\EA0B\"}.glyph-alarm-bell-cancelled-filled.sc-ix-icon:before{content:\"\\EA0C\"}.glyph-alarm-bell-cancelled.sc-ix-icon:before{content:\"\\EA0D\"}.glyph-alarm-bell-filled.sc-ix-icon:before{content:\"\\EA0E\"}.glyph-alarm-bell.sc-ix-icon:before{content:\"\\EA0F\"}.glyph-alarm-clock-filled.sc-ix-icon:before{content:\"\\EA10\"}.glyph-alarm-clock.sc-ix-icon:before{content:\"\\EA11\"}.glyph-alarm-filled.sc-ix-icon:before{content:\"\\EA12\"}.glyph-alarm.sc-ix-icon:before{content:\"\\EA13\"}.glyph-analyze.sc-ix-icon:before{content:\"\\EA14\"}.glyph-anomaly-found.sc-ix-icon:before{content:\"\\EA15\"}.glyph-anomaly.sc-ix-icon:before{content:\"\\EA16\"}.glyph-app-menu.sc-ix-icon:before{content:\"\\EA17\"}.glyph-apps.sc-ix-icon:before{content:\"\\EA18\"}.glyph-arrow-down-right.sc-ix-icon:before{content:\"\\EA19\"}.glyph-arrow-down.sc-ix-icon:before{content:\"\\EA1A\"}.glyph-arrow-left.sc-ix-icon:before{content:\"\\EA1B\"}.glyph-arrow-right.sc-ix-icon:before{content:\"\\EA1C\"}.glyph-arrow-up.sc-ix-icon:before{content:\"\\EA1D\"}.glyph-attach.sc-ix-icon:before{content:\"\\EA1E\"}.glyph-attachment-upload.sc-ix-icon:before{content:\"\\EA1F\"}.glyph-audio-description1.sc-ix-icon:before{content:\"\\EA20\"}.glyph-audio-description2.sc-ix-icon:before{content:\"\\EA21\"}.glyph-audit-report.sc-ix-icon:before{content:\"\\EA22\"}.glyph-average.sc-ix-icon:before{content:\"\\EA23\"}.glyph-bar-code.sc-ix-icon:before{content:\"\\EA24\"}.glyph-barchart.sc-ix-icon:before{content:\"\\EA25\"}.glyph-battery-check.sc-ix-icon:before{content:\"\\EA26\"}.glyph-battery-empty-question.sc-ix-icon:before{content:\"\\EA27\"}.glyph-battery-empty.sc-ix-icon:before{content:\"\\EA28\"}.glyph-battery-exclamation.sc-ix-icon:before{content:\"\\EA29\"}.glyph-battery-full-check.sc-ix-icon:before{content:\"\\EA2A\"}.glyph-battery-full.sc-ix-icon:before{content:\"\\EA2B\"}.glyph-battery-half.sc-ix-icon:before{content:\"\\EA2C\"}.glyph-battery-low.sc-ix-icon:before{content:\"\\EA2D\"}.glyph-battery-quarter.sc-ix-icon:before{content:\"\\EA2E\"}.glyph-battery-slash.sc-ix-icon:before{content:\"\\EA2F\"}.glyph-battery-three-quarter.sc-ix-icon:before{content:\"\\EA30\"}.glyph-battery-xmark.sc-ix-icon:before{content:\"\\EA31\"}.glyph-binoculars-filled.sc-ix-icon:before{content:\"\\EA32\"}.glyph-binoculars.sc-ix-icon:before{content:\"\\EA33\"}.glyph-book.sc-ix-icon:before{content:\"\\EA34\"}.glyph-bookmark-filled.sc-ix-icon:before{content:\"\\EA35\"}.glyph-bookmark.sc-ix-icon:before{content:\"\\EA36\"}.glyph-building1-filled.sc-ix-icon:before{content:\"\\EA37\"}.glyph-building1.sc-ix-icon:before{content:\"\\EA38\"}.glyph-building2-filled.sc-ix-icon:before{content:\"\\EA39\"}.glyph-building2.sc-ix-icon:before{content:\"\\EA3A\"}.glyph-bulb-filled.sc-ix-icon:before{content:\"\\EA3B\"}.glyph-bulb.sc-ix-icon:before{content:\"\\EA3C\"}.glyph-calendar-filled.sc-ix-icon:before{content:\"\\EA3D\"}.glyph-calendar-settings.sc-ix-icon:before{content:\"\\EA3E\"}.glyph-calendar.sc-ix-icon:before{content:\"\\EA3F\"}.glyph-cancel.sc-ix-icon:before{content:\"\\EA40\"}.glyph-cancelled.sc-ix-icon:before{content:\"\\EA41\"}.glyph-capacity-filled.sc-ix-icon:before{content:\"\\EA42\"}.glyph-capacity.sc-ix-icon:before{content:\"\\EA43\"}.glyph-capture.sc-ix-icon:before{content:\"\\EA44\"}.glyph-card-layout-filled.sc-ix-icon:before{content:\"\\EA45\"}.glyph-card-layout.sc-ix-icon:before{content:\"\\EA46\"}.glyph-chart-cursor.sc-ix-icon:before{content:\"\\EA47\"}.glyph-chart-curve-linear.sc-ix-icon:before{content:\"\\EA48\"}.glyph-chart-curve-spline.sc-ix-icon:before{content:\"\\EA49\"}.glyph-chart-curve-stepped.sc-ix-icon:before{content:\"\\EA4A\"}.glyph-chart-labels-filled.sc-ix-icon:before{content:\"\\EA4B\"}.glyph-chart-labels.sc-ix-icon:before{content:\"\\EA4C\"}.glyph-checkbox-component-checked.sc-ix-icon:before{content:\"\\EA4D\"}.glyph-checkbox-component-mixed.sc-ix-icon:before{content:\"\\EA4E\"}.glyph-checkbox-component-unchecked.sc-ix-icon:before{content:\"\\EA4F\"}.glyph-checkbox-filled.sc-ix-icon:before{content:\"\\EA50\"}.glyph-checkbox.sc-ix-icon:before{content:\"\\EA51\"}.glyph-checkboxes-filled.sc-ix-icon:before{content:\"\\EA52\"}.glyph-checkboxes.sc-ix-icon:before{content:\"\\EA53\"}.glyph-chevron-down-small.sc-ix-icon:before{content:\"\\EA54\"}.glyph-chevron-down.sc-ix-icon:before{content:\"\\EA55\"}.glyph-chevron-left-small.sc-ix-icon:before{content:\"\\EA56\"}.glyph-chevron-left.sc-ix-icon:before{content:\"\\EA57\"}.glyph-chevron-right-small.sc-ix-icon:before{content:\"\\EA58\"}.glyph-chevron-right.sc-ix-icon:before{content:\"\\EA59\"}.glyph-chevron-up-small.sc-ix-icon:before{content:\"\\EA5A\"}.glyph-chevron-up.sc-ix-icon:before{content:\"\\EA5B\"}.glyph-circle-dot-filled.sc-ix-icon:before{content:\"\\EA5C\"}.glyph-circle-dot.sc-ix-icon:before{content:\"\\EA5D\"}.glyph-circle-filled.sc-ix-icon:before{content:\"\\EA5E\"}.glyph-circle-pause-filled.sc-ix-icon:before{content:\"\\EA5F\"}.glyph-circle-pause.sc-ix-icon:before{content:\"\\EA60\"}.glyph-circle-play-filled.sc-ix-icon:before{content:\"\\EA61\"}.glyph-circle-play.sc-ix-icon:before{content:\"\\EA62\"}.glyph-circle-stop-filled.sc-ix-icon:before{content:\"\\EA63\"}.glyph-circle-stop.sc-ix-icon:before{content:\"\\EA64\"}.glyph-circle.sc-ix-icon:before{content:\"\\EA65\"}.glyph-clear-filter-filled.sc-ix-icon:before{content:\"\\EA66\"}.glyph-clear-filter.sc-ix-icon:before{content:\"\\EA67\"}.glyph-clear.sc-ix-icon:before{content:\"\\EA68\"}.glyph-clock-filled.sc-ix-icon:before{content:\"\\EA69\"}.glyph-clock.sc-ix-icon:before{content:\"\\EA6A\"}.glyph-close-small.sc-ix-icon:before{content:\"\\EA6B\"}.glyph-close.sc-ix-icon:before{content:\"\\EA6C\"}.glyph-cloud-download-add-filled.sc-ix-icon:before{content:\"\\EA6D\"}.glyph-cloud-download-add.sc-ix-icon:before{content:\"\\EA6E\"}.glyph-cloud-download-filled.sc-ix-icon:before{content:\"\\EA6F\"}.glyph-cloud-download-list-filled.sc-ix-icon:before{content:\"\\EA70\"}.glyph-cloud-download-list.sc-ix-icon:before{content:\"\\EA71\"}.glyph-cloud-download.sc-ix-icon:before{content:\"\\EA72\"}.glyph-cloud-filled.sc-ix-icon:before{content:\"\\EA73\"}.glyph-cloud-new-filled.sc-ix-icon:before{content:\"\\EA74\"}.glyph-cloud-new.sc-ix-icon:before{content:\"\\EA75\"}.glyph-cloud-success-filled.sc-ix-icon:before{content:\"\\EA76\"}.glyph-cloud-success.sc-ix-icon:before{content:\"\\EA77\"}.glyph-cloud-upload-filled.sc-ix-icon:before{content:\"\\EA78\"}.glyph-cloud-upload.sc-ix-icon:before{content:\"\\EA79\"}.glyph-cloud.sc-ix-icon:before{content:\"\\EA7A\"}.glyph-code.sc-ix-icon:before{content:\"\\EA7B\"}.glyph-cogwheel-filled.sc-ix-icon:before{content:\"\\EA7C\"}.glyph-cogwheel.sc-ix-icon:before{content:\"\\EA7D\"}.glyph-combine.sc-ix-icon:before{content:\"\\EA7E\"}.glyph-compact-disc-filled.sc-ix-icon:before{content:\"\\EA7F\"}.glyph-compact-disc.sc-ix-icon:before{content:\"\\EA80\"}.glyph-compound-block.sc-ix-icon:before{content:\"\\EA81\"}.glyph-configuration.sc-ix-icon:before{content:\"\\EA82\"}.glyph-configure-filled.sc-ix-icon:before{content:\"\\EA83\"}.glyph-configure.sc-ix-icon:before{content:\"\\EA84\"}.glyph-connected.sc-ix-icon:before{content:\"\\EA85\"}.glyph-connector-chart-filled.sc-ix-icon:before{content:\"\\EA86\"}.glyph-connector-chart.sc-ix-icon:before{content:\"\\EA87\"}.glyph-connector-filled.sc-ix-icon:before{content:\"\\EA88\"}.glyph-connector-hex-filled.sc-ix-icon:before{content:\"\\EA89\"}.glyph-connector-hex.sc-ix-icon:before{content:\"\\EA8A\"}.glyph-connector-rect-filled.sc-ix-icon:before{content:\"\\EA8B\"}.glyph-connector-rect.sc-ix-icon:before{content:\"\\EA8C\"}.glyph-connector-rhomb-filled.sc-ix-icon:before{content:\"\\EA8D\"}.glyph-connector-rhomb.sc-ix-icon:before{content:\"\\EA8E\"}.glyph-connector.sc-ix-icon:before{content:\"\\EA8F\"}.glyph-contact-details-filled.sc-ix-icon:before{content:\"\\EA90\"}.glyph-contact-details.sc-ix-icon:before{content:\"\\EA91\"}.glyph-context-menu.sc-ix-icon:before{content:\"\\EA92\"}.glyph-controlled-device.sc-ix-icon:before{content:\"\\EA93\"}.glyph-controller-device.sc-ix-icon:before{content:\"\\EA94\"}.glyph-copy.sc-ix-icon:before{content:\"\\EA95\"}.glyph-corner-arrow-up-left.sc-ix-icon:before{content:\"\\EA96\"}.glyph-couch-filled.sc-ix-icon:before{content:\"\\EA97\"}.glyph-couch.sc-ix-icon:before{content:\"\\EA98\"}.glyph-create-plant-filled.sc-ix-icon:before{content:\"\\EA99\"}.glyph-create-plant.sc-ix-icon:before{content:\"\\EA9A\"}.glyph-cut.sc-ix-icon:before{content:\"\\EA9B\"}.glyph-cycle.sc-ix-icon:before{content:\"\\EA9C\"}.glyph-data-egress.sc-ix-icon:before{content:\"\\EA9D\"}.glyph-data-ingress-egress.sc-ix-icon:before{content:\"\\EA9E\"}.glyph-data-ingress.sc-ix-icon:before{content:\"\\EA9F\"}.glyph-database-filled.sc-ix-icon:before{content:\"\\EAA0\"}.glyph-database.sc-ix-icon:before{content:\"\\EAA1\"}.glyph-details.sc-ix-icon:before{content:\"\\EAA2\"}.glyph-diagram-module-library.sc-ix-icon:before{content:\"\\EAA3\"}.glyph-diagram-module-new.sc-ix-icon:before{content:\"\\EAA4\"}.glyph-diagram-module.sc-ix-icon:before{content:\"\\EAA5\"}.glyph-diamond.sc-ix-icon:before{content:\"\\EAA6\"}.glyph-disconnected.sc-ix-icon:before{content:\"\\EAA7\"}.glyph-disk-filled.sc-ix-icon:before{content:\"\\EAA8\"}.glyph-disk-pen.sc-ix-icon:before{content:\"\\EAA9\"}.glyph-disk.sc-ix-icon:before{content:\"\\EAAA\"}.glyph-doc-document.sc-ix-icon:before{content:\"\\EAAB\"}.glyph-document-bulk.sc-ix-icon:before{content:\"\\EAAC\"}.glyph-document-info.sc-ix-icon:before{content:\"\\EAAD\"}.glyph-document-link.sc-ix-icon:before{content:\"\\EAAE\"}.glyph-document-management.sc-ix-icon:before{content:\"\\EAAF\"}.glyph-document-reference.sc-ix-icon:before{content:\"\\EAB0\"}.glyph-document-settings.sc-ix-icon:before{content:\"\\EAB1\"}.glyph-document-success.sc-ix-icon:before{content:\"\\EAB2\"}.glyph-document.sc-ix-icon:before{content:\"\\EAB3\"}.glyph-double-check.sc-ix-icon:before{content:\"\\EAB4\"}.glyph-double-chevron-down.sc-ix-icon:before{content:\"\\EAB5\"}.glyph-double-chevron-left.sc-ix-icon:before{content:\"\\EAB6\"}.glyph-double-chevron-right.sc-ix-icon:before{content:\"\\EAB7\"}.glyph-double-chevron-up.sc-ix-icon:before{content:\"\\EAB8\"}.glyph-doublet-filled.sc-ix-icon:before{content:\"\\EAB9\"}.glyph-doublet.sc-ix-icon:before{content:\"\\EABA\"}.glyph-download-add.sc-ix-icon:before{content:\"\\EABB\"}.glyph-download-list.sc-ix-icon:before{content:\"\\EABC\"}.glyph-download.sc-ix-icon:before{content:\"\\EABD\"}.glyph-drop.sc-ix-icon:before{content:\"\\EABE\"}.glyph-duplicate-document.sc-ix-icon:before{content:\"\\EABF\"}.glyph-duplicate.sc-ix-icon:before{content:\"\\EAC0\"}.glyph-e-mail-filled.sc-ix-icon:before{content:\"\\EAC1\"}.glyph-e-mail.sc-ix-icon:before{content:\"\\EAC2\"}.glyph-earth-filled.sc-ix-icon:before{content:\"\\EAC3\"}.glyph-earth.sc-ix-icon:before{content:\"\\EAC4\"}.glyph-edit-plant.sc-ix-icon:before{content:\"\\EAC5\"}.glyph-error-filled.sc-ix-icon:before{content:\"\\EAC6\"}.glyph-error.sc-ix-icon:before{content:\"\\EAC7\"}.glyph-explore-filled.sc-ix-icon:before{content:\"\\EAC8\"}.glyph-explore.sc-ix-icon:before{content:\"\\EAC9\"}.glyph-export.sc-ix-icon:before{content:\"\\EACA\"}.glyph-eye-cancelled-filled.sc-ix-icon:before{content:\"\\EACB\"}.glyph-eye-cancelled.sc-ix-icon:before{content:\"\\EACC\"}.glyph-eye-filled.sc-ix-icon:before{content:\"\\EACD\"}.glyph-eye.sc-ix-icon:before{content:\"\\EACE\"}.glyph-filter-filled.sc-ix-icon:before{content:\"\\EACF\"}.glyph-filter-outline.sc-ix-icon:before{content:\"\\EAD0\"}.glyph-filter.sc-ix-icon:before{content:\"\\EAD1\"}.glyph-flag-filled.sc-ix-icon:before{content:\"\\EAD2\"}.glyph-flag.sc-ix-icon:before{content:\"\\EAD3\"}.glyph-folder-down-filled.sc-ix-icon:before{content:\"\\EAD4\"}.glyph-folder-down.sc-ix-icon:before{content:\"\\EAD5\"}.glyph-folder-filled.sc-ix-icon:before{content:\"\\EAD6\"}.glyph-folder-new-filled.sc-ix-icon:before{content:\"\\EAD7\"}.glyph-folder-new-outline.sc-ix-icon:before{content:\"\\EAD8\"}.glyph-folder-new.sc-ix-icon:before{content:\"\\EAD9\"}.glyph-folder-open-filled.sc-ix-icon:before{content:\"\\EADA\"}.glyph-folder-open-outline.sc-ix-icon:before{content:\"\\EADB\"}.glyph-folder-open.sc-ix-icon:before{content:\"\\EADC\"}.glyph-folder-outline.sc-ix-icon:before{content:\"\\EADD\"}.glyph-folder-up-filled.sc-ix-icon:before{content:\"\\EADE\"}.glyph-folder-up.sc-ix-icon:before{content:\"\\EADF\"}.glyph-folder.sc-ix-icon:before{content:\"\\EAE0\"}.glyph-full-screeen-exit.sc-ix-icon:before{content:\"\\EAE1\"}.glyph-full-screeen.sc-ix-icon:before{content:\"\\EAE2\"}.glyph-function-block-library.sc-ix-icon:before{content:\"\\EAE3\"}.glyph-function-block-new.sc-ix-icon:before{content:\"\\EAE4\"}.glyph-function-block.sc-ix-icon:before{content:\"\\EAE5\"}.glyph-function-diagram-new.sc-ix-icon:before{content:\"\\EAE6\"}.glyph-function-diagram.sc-ix-icon:before{content:\"\\EAE7\"}.glyph-gauge-filled.sc-ix-icon:before{content:\"\\EAE8\"}.glyph-gauge.sc-ix-icon:before{content:\"\\EAE9\"}.glyph-gaugechart.sc-ix-icon:before{content:\"\\EAEA\"}.glyph-global-plant-filled.sc-ix-icon:before{content:\"\\EAEB\"}.glyph-global-plant.sc-ix-icon:before{content:\"\\EAEC\"}.glyph-globe-filled.sc-ix-icon:before{content:\"\\EAED\"}.glyph-globe.sc-ix-icon:before{content:\"\\EAEE\"}.glyph-goto.sc-ix-icon:before{content:\"\\EAEF\"}.glyph-group.sc-ix-icon:before{content:\"\\EAF0\"}.glyph-hardware-cabinet.sc-ix-icon:before{content:\"\\EAF1\"}.glyph-health-filled.sc-ix-icon:before{content:\"\\EAF2\"}.glyph-health.sc-ix-icon:before{content:\"\\EAF3\"}.glyph-heart-filled.sc-ix-icon:before{content:\"\\EAF4\"}.glyph-heart.sc-ix-icon:before{content:\"\\EAF5\"}.glyph-hierarchy.sc-ix-icon:before{content:\"\\EAF6\"}.glyph-highlight-filled.sc-ix-icon:before{content:\"\\EAF7\"}.glyph-highlight.sc-ix-icon:before{content:\"\\EAF8\"}.glyph-history-list.sc-ix-icon:before{content:\"\\EAF9\"}.glyph-history.sc-ix-icon:before{content:\"\\EAFA\"}.glyph-home-filled.sc-ix-icon:before{content:\"\\EAFB\"}.glyph-home.sc-ix-icon:before{content:\"\\EAFC\"}.glyph-hourglass.sc-ix-icon:before{content:\"\\EAFD\"}.glyph-image-filled.sc-ix-icon:before{content:\"\\EAFE\"}.glyph-image.sc-ix-icon:before{content:\"\\EAFF\"}.glyph-import.sc-ix-icon:before{content:\"\\EB00\"}.glyph-info-feed.sc-ix-icon:before{content:\"\\EB01\"}.glyph-info-filled.sc-ix-icon:before{content:\"\\EB02\"}.glyph-info.sc-ix-icon:before{content:\"\\EB03\"}.glyph-ingestion-report.sc-ix-icon:before{content:\"\\EB04\"}.glyph-ingestion.sc-ix-icon:before{content:\"\\EB05\"}.glyph-ink-pen.sc-ix-icon:before{content:\"\\EB06\"}.glyph-inquiry-filled.sc-ix-icon:before{content:\"\\EB07\"}.glyph-inquiry-mail.sc-ix-icon:before{content:\"\\EB08\"}.glyph-inquiry.sc-ix-icon:before{content:\"\\EB09\"}.glyph-item-details-filled.sc-ix-icon:before{content:\"\\EB0A\"}.glyph-item-details.sc-ix-icon:before{content:\"\\EB0B\"}.glyph-label-filled.sc-ix-icon:before{content:\"\\EB0C\"}.glyph-label.sc-ix-icon:before{content:\"\\EB0D\"}.glyph-language-filled.sc-ix-icon:before{content:\"\\EB0E\"}.glyph-language.sc-ix-icon:before{content:\"\\EB0F\"}.glyph-layers-filled.sc-ix-icon:before{content:\"\\EB10\"}.glyph-layers.sc-ix-icon:before{content:\"\\EB11\"}.glyph-leaf.sc-ix-icon:before{content:\"\\EB12\"}.glyph-legal.sc-ix-icon:before{content:\"\\EB13\"}.glyph-library-new.sc-ix-icon:before{content:\"\\EB14\"}.glyph-library.sc-ix-icon:before{content:\"\\EB15\"}.glyph-license.sc-ix-icon:before{content:\"\\EB16\"}.glyph-link.sc-ix-icon:before{content:\"\\EB17\"}.glyph-list.sc-ix-icon:before{content:\"\\EB18\"}.glyph-live-schedule.sc-ix-icon:before{content:\"\\EB19\"}.glyph-location-filled.sc-ix-icon:before{content:\"\\EB1A\"}.glyph-location-outline.sc-ix-icon:before{content:\"\\EB1B\"}.glyph-location.sc-ix-icon:before{content:\"\\EB1C\"}.glyph-lock-filled.sc-ix-icon:before{content:\"\\EB1D\"}.glyph-lock-key-filled.sc-ix-icon:before{content:\"\\EB1E\"}.glyph-lock-key.sc-ix-icon:before{content:\"\\EB1F\"}.glyph-lock.sc-ix-icon:before{content:\"\\EB20\"}.glyph-log-in.sc-ix-icon:before{content:\"\\EB21\"}.glyph-log-out.sc-ix-icon:before{content:\"\\EB22\"}.glyph-log.sc-ix-icon:before{content:\"\\EB23\"}.glyph-logic-diagram.sc-ix-icon:before{content:\"\\EB24\"}.glyph-lower-limit.sc-ix-icon:before{content:\"\\EB25\"}.glyph-mail-filled.sc-ix-icon:before{content:\"\\EB26\"}.glyph-mail.sc-ix-icon:before{content:\"\\EB27\"}.glyph-maintenance-documents.sc-ix-icon:before{content:\"\\EB28\"}.glyph-maintenance-info.sc-ix-icon:before{content:\"\\EB29\"}.glyph-maintenance-warning-filled.sc-ix-icon:before{content:\"\\EB2A\"}.glyph-maintenance-warning.sc-ix-icon:before{content:\"\\EB2B\"}.glyph-maintenance.sc-ix-icon:before{content:\"\\EB2C\"}.glyph-mandatory-done.sc-ix-icon:before{content:\"\\EB2D\"}.glyph-mandatory.sc-ix-icon:before{content:\"\\EB2E\"}.glyph-map.sc-ix-icon:before{content:\"\\EB2F\"}.glyph-maximize.sc-ix-icon:before{content:\"\\EB30\"}.glyph-microphone-filled.sc-ix-icon:before{content:\"\\EB31\"}.glyph-microphone.sc-ix-icon:before{content:\"\\EB32\"}.glyph-minimize.sc-ix-icon:before{content:\"\\EB33\"}.glyph-minus.sc-ix-icon:before{content:\"\\EB34\"}.glyph-mix.sc-ix-icon:before{content:\"\\EB35\"}.glyph-monitor-filled.sc-ix-icon:before{content:\"\\EB36\"}.glyph-monitor-trend.sc-ix-icon:before{content:\"\\EB37\"}.glyph-monitor.sc-ix-icon:before{content:\"\\EB38\"}.glyph-more-menu.sc-ix-icon:before{content:\"\\EB39\"}.glyph-mouse-click-filled.sc-ix-icon:before{content:\"\\EB3A\"}.glyph-mouse-click.sc-ix-icon:before{content:\"\\EB3B\"}.glyph-mouse-select-filled.sc-ix-icon:before{content:\"\\EB3C\"}.glyph-mouse-select.sc-ix-icon:before{content:\"\\EB3D\"}.glyph-mp4-document.sc-ix-icon:before{content:\"\\EB3E\"}.glyph-namur-check-function-filled.sc-ix-icon:before{content:\"\\EB3F\"}.glyph-namur-check-function.sc-ix-icon:before{content:\"\\EB40\"}.glyph-namur-failure-filled.sc-ix-icon:before{content:\"\\EB41\"}.glyph-namur-failure.sc-ix-icon:before{content:\"\\EB42\"}.glyph-namur-maintenance-required-filled.sc-ix-icon:before{content:\"\\EB43\"}.glyph-namur-maintenance-required.sc-ix-icon:before{content:\"\\EB44\"}.glyph-namur-ok-filled.sc-ix-icon:before{content:\"\\EB45\"}.glyph-namur-ok.sc-ix-icon:before{content:\"\\EB46\"}.glyph-namur-out-of-spec-filled.sc-ix-icon:before{content:\"\\EB47\"}.glyph-namur-out-of-spec.sc-ix-icon:before{content:\"\\EB48\"}.glyph-navigation-filled.sc-ix-icon:before{content:\"\\EB49\"}.glyph-navigation-left.sc-ix-icon:before{content:\"\\EB4A\"}.glyph-navigation-right.sc-ix-icon:before{content:\"\\EB4B\"}.glyph-navigation.sc-ix-icon:before{content:\"\\EB4C\"}.glyph-new-indicator-filled.sc-ix-icon:before{content:\"\\EB4D\"}.glyph-new-indicator.sc-ix-icon:before{content:\"\\EB4E\"}.glyph-no-filter-filled.sc-ix-icon:before{content:\"\\EB4F\"}.glyph-no-filter.sc-ix-icon:before{content:\"\\EB50\"}.glyph-note-filled.sc-ix-icon:before{content:\"\\EB51\"}.glyph-note.sc-ix-icon:before{content:\"\\EB52\"}.glyph-notification-filled.sc-ix-icon:before{content:\"\\EB53\"}.glyph-notification.sc-ix-icon:before{content:\"\\EB54\"}.glyph-notifications-filled.sc-ix-icon:before{content:\"\\EB55\"}.glyph-notifications.sc-ix-icon:before{content:\"\\EB56\"}.glyph-ontology-filled.sc-ix-icon:before{content:\"\\EB57\"}.glyph-ontology.sc-ix-icon:before{content:\"\\EB58\"}.glyph-open-external.sc-ix-icon:before{content:\"\\EB59\"}.glyph-open-file-filled.sc-ix-icon:before{content:\"\\EB5A\"}.glyph-open-file.sc-ix-icon:before{content:\"\\EB5B\"}.glyph-operate-plant-filled.sc-ix-icon:before{content:\"\\EB5C\"}.glyph-operate-plant.sc-ix-icon:before{content:\"\\EB5D\"}.glyph-optimize.sc-ix-icon:before{content:\"\\EB5E\"}.glyph-p-and-i-symbols.sc-ix-icon:before{content:\"\\EB5F\"}.glyph-p-i-diagram.sc-ix-icon:before{content:\"\\EB60\"}.glyph-pan.sc-ix-icon:before{content:\"\\EB61\"}.glyph-paste.sc-ix-icon:before{content:\"\\EB62\"}.glyph-pause.sc-ix-icon:before{content:\"\\EB63\"}.glyph-pc-tower-filled.sc-ix-icon:before{content:\"\\EB64\"}.glyph-pc-tower.sc-ix-icon:before{content:\"\\EB65\"}.glyph-pdf-document.sc-ix-icon:before{content:\"\\EB66\"}.glyph-pen-filled.sc-ix-icon:before{content:\"\\EB67\"}.glyph-pen.sc-ix-icon:before{content:\"\\EB68\"}.glyph-phone-filled.sc-ix-icon:before{content:\"\\EB69\"}.glyph-phone.sc-ix-icon:before{content:\"\\EB6A\"}.glyph-photo-camera-filled.sc-ix-icon:before{content:\"\\EB6B\"}.glyph-photo-camera.sc-ix-icon:before{content:\"\\EB6C\"}.glyph-piechart-filled.sc-ix-icon:before{content:\"\\EB6D\"}.glyph-piechart.sc-ix-icon:before{content:\"\\EB6E\"}.glyph-pin-filled.sc-ix-icon:before{content:\"\\EB6F\"}.glyph-pin.sc-ix-icon:before{content:\"\\EB70\"}.glyph-plant-filled.sc-ix-icon:before{content:\"\\EB71\"}.glyph-plant-handbook-filled.sc-ix-icon:before{content:\"\\EB72\"}.glyph-plant-handbook.sc-ix-icon:before{content:\"\\EB73\"}.glyph-plant-outline.sc-ix-icon:before{content:\"\\EB74\"}.glyph-plant-security.sc-ix-icon:before{content:\"\\EB75\"}.glyph-plant-settings-filled.sc-ix-icon:before{content:\"\\EB76\"}.glyph-plant-settings.sc-ix-icon:before{content:\"\\EB77\"}.glyph-plant-user-filled.sc-ix-icon:before{content:\"\\EB78\"}.glyph-plant-user.sc-ix-icon:before{content:\"\\EB79\"}.glyph-plant.sc-ix-icon:before{content:\"\\EB7A\"}.glyph-plants-filled.sc-ix-icon:before{content:\"\\EB7B\"}.glyph-plants.sc-ix-icon:before{content:\"\\EB7C\"}.glyph-play-filled.sc-ix-icon:before{content:\"\\EB7D\"}.glyph-play.sc-ix-icon:before{content:\"\\EB7E\"}.glyph-plus.sc-ix-icon:before{content:\"\\EB7F\"}.glyph-point-up-filled.sc-ix-icon:before{content:\"\\EB80\"}.glyph-point-up.sc-ix-icon:before{content:\"\\EB81\"}.glyph-polar-plot.sc-ix-icon:before{content:\"\\EB82\"}.glyph-ppt-document.sc-ix-icon:before{content:\"\\EB83\"}.glyph-print-filled.sc-ix-icon:before{content:\"\\EB84\"}.glyph-print.sc-ix-icon:before{content:\"\\EB85\"}.glyph-prio-high.sc-ix-icon:before{content:\"\\EB86\"}.glyph-prio-low.sc-ix-icon:before{content:\"\\EB87\"}.glyph-prio-middle.sc-ix-icon:before{content:\"\\EB88\"}.glyph-product-catalog.sc-ix-icon:before{content:\"\\EB89\"}.glyph-product-management.sc-ix-icon:before{content:\"\\EB8A\"}.glyph-product.sc-ix-icon:before{content:\"\\EB8B\"}.glyph-project-configuration.sc-ix-icon:before{content:\"\\EB8C\"}.glyph-project-new.sc-ix-icon:before{content:\"\\EB8D\"}.glyph-project.sc-ix-icon:before{content:\"\\EB8E\"}.glyph-protocol.sc-ix-icon:before{content:\"\\EB8F\"}.glyph-publish-document.sc-ix-icon:before{content:\"\\EB90\"}.glyph-publish.sc-ix-icon:before{content:\"\\EB91\"}.glyph-qr-code.sc-ix-icon:before{content:\"\\EB92\"}.glyph-quality-report.sc-ix-icon:before{content:\"\\EB93\"}.glyph-question-filled.sc-ix-icon:before{content:\"\\EB94\"}.glyph-question.sc-ix-icon:before{content:\"\\EB95\"}.glyph-radarchart.sc-ix-icon:before{content:\"\\EB96\"}.glyph-radio-waves-off.sc-ix-icon:before{content:\"\\EB97\"}.glyph-radio-waves.sc-ix-icon:before{content:\"\\EB98\"}.glyph-random-filled.sc-ix-icon:before{content:\"\\EB99\"}.glyph-random.sc-ix-icon:before{content:\"\\EB9A\"}.glyph-redo.sc-ix-icon:before{content:\"\\EB9B\"}.glyph-reference.sc-ix-icon:before{content:\"\\EB9C\"}.glyph-refresh-cancelled.sc-ix-icon:before{content:\"\\EB9D\"}.glyph-refresh.sc-ix-icon:before{content:\"\\EB9E\"}.glyph-reload.sc-ix-icon:before{content:\"\\EB9F\"}.glyph-remove-eye-filled.sc-ix-icon:before{content:\"\\EBA0\"}.glyph-remove-eye.sc-ix-icon:before{content:\"\\EBA1\"}.glyph-rename.sc-ix-icon:before{content:\"\\EBA2\"}.glyph-report-barchart.sc-ix-icon:before{content:\"\\EBA3\"}.glyph-report-linechart.sc-ix-icon:before{content:\"\\EBA4\"}.glyph-report-text.sc-ix-icon:before{content:\"\\EBA5\"}.glyph-reset.sc-ix-icon:before{content:\"\\EBA6\"}.glyph-rhomb-filled.sc-ix-icon:before{content:\"\\EBA7\"}.glyph-rhomb.sc-ix-icon:before{content:\"\\EBA8\"}.glyph-rocket-filled.sc-ix-icon:before{content:\"\\EBA9\"}.glyph-rocket.sc-ix-icon:before{content:\"\\EBAA\"}.glyph-scatterplot.sc-ix-icon:before{content:\"\\EBAB\"}.glyph-scheduler-filled.sc-ix-icon:before{content:\"\\EBAC\"}.glyph-scheduler.sc-ix-icon:before{content:\"\\EBAD\"}.glyph-screen-filled.sc-ix-icon:before{content:\"\\EBAE\"}.glyph-screen.sc-ix-icon:before{content:\"\\EBAF\"}.glyph-screenshot-filled.sc-ix-icon:before{content:\"\\EBB0\"}.glyph-screenshot.sc-ix-icon:before{content:\"\\EBB1\"}.glyph-search.sc-ix-icon:before{content:\"\\EBB2\"}.glyph-share-filled.sc-ix-icon:before{content:\"\\EBB3\"}.glyph-share.sc-ix-icon:before{content:\"\\EBB4\"}.glyph-shopping-cart-filled.sc-ix-icon:before{content:\"\\EBB5\"}.glyph-shopping-cart.sc-ix-icon:before{content:\"\\EBB6\"}.glyph-shout-filled.sc-ix-icon:before{content:\"\\EBB7\"}.glyph-shout.sc-ix-icon:before{content:\"\\EBB8\"}.glyph-sign-language.sc-ix-icon:before{content:\"\\EBB9\"}.glyph-signal-strength-0.sc-ix-icon:before{content:\"\\EBBA\"}.glyph-signal-strength-1.sc-ix-icon:before{content:\"\\EBBB\"}.glyph-signal-strength-2.sc-ix-icon:before{content:\"\\EBBC\"}.glyph-signal-strength-3.sc-ix-icon:before{content:\"\\EBBD\"}.glyph-signal-strength-4.sc-ix-icon:before{content:\"\\EBBE\"}.glyph-signal-strength-5.sc-ix-icon:before{content:\"\\EBBF\"}.glyph-signal-strength-6.sc-ix-icon:before{content:\"\\EBC0\"}.glyph-signal-strength-7.sc-ix-icon:before{content:\"\\EBC1\"}.glyph-signal-strength-8.sc-ix-icon:before{content:\"\\EBC2\"}.glyph-single-check.sc-ix-icon:before{content:\"\\EBC3\"}.glyph-skip-back-filled.sc-ix-icon:before{content:\"\\EBC4\"}.glyph-skip-back.sc-ix-icon:before{content:\"\\EBC5\"}.glyph-skip-filled.sc-ix-icon:before{content:\"\\EBC6\"}.glyph-skip.sc-ix-icon:before{content:\"\\EBC7\"}.glyph-snowflake.sc-ix-icon:before{content:\"\\EBC8\"}.glyph-sort-ascending.sc-ix-icon:before{content:\"\\EBC9\"}.glyph-sort-descending.sc-ix-icon:before{content:\"\\EBCA\"}.glyph-sort.sc-ix-icon:before{content:\"\\EBCB\"}.glyph-sound-loud-filled.sc-ix-icon:before{content:\"\\EBCC\"}.glyph-sound-loud.sc-ix-icon:before{content:\"\\EBCD\"}.glyph-sound-mute-filled.sc-ix-icon:before{content:\"\\EBCE\"}.glyph-sound-mute.sc-ix-icon:before{content:\"\\EBCF\"}.glyph-sound-off-filled.sc-ix-icon:before{content:\"\\EBD0\"}.glyph-sound-off.sc-ix-icon:before{content:\"\\EBD1\"}.glyph-sound-quiet-filled.sc-ix-icon:before{content:\"\\EBD2\"}.glyph-sound-quiet.sc-ix-icon:before{content:\"\\EBD3\"}.glyph-spatial.sc-ix-icon:before{content:\"\\EBD4\"}.glyph-split-horizontally.sc-ix-icon:before{content:\"\\EBD5\"}.glyph-split-vertically.sc-ix-icon:before{content:\"\\EBD6\"}.glyph-star-add-filled.sc-ix-icon:before{content:\"\\EBD7\"}.glyph-star-add.sc-ix-icon:before{content:\"\\EBD8\"}.glyph-star-cancelled-filled.sc-ix-icon:before{content:\"\\EBD9\"}.glyph-star-cancelled.sc-ix-icon:before{content:\"\\EBDA\"}.glyph-star-filled.sc-ix-icon:before{content:\"\\EBDB\"}.glyph-star-list-filled.sc-ix-icon:before{content:\"\\EBDC\"}.glyph-star-list.sc-ix-icon:before{content:\"\\EBDD\"}.glyph-star.sc-ix-icon:before{content:\"\\EBDE\"}.glyph-start-data-analysis.sc-ix-icon:before{content:\"\\EBDF\"}.glyph-stop-filled.sc-ix-icon:before{content:\"\\EBE0\"}.glyph-stop.sc-ix-icon:before{content:\"\\EBE1\"}.glyph-success-filled.sc-ix-icon:before{content:\"\\EBE2\"}.glyph-success.sc-ix-icon:before{content:\"\\EBE3\"}.glyph-sun-filled.sc-ix-icon:before{content:\"\\EBE4\"}.glyph-sun.sc-ix-icon:before{content:\"\\EBE5\"}.glyph-support.sc-ix-icon:before{content:\"\\EBE6\"}.glyph-surveillance-filled.sc-ix-icon:before{content:\"\\EBE7\"}.glyph-surveillance.sc-ix-icon:before{content:\"\\EBE8\"}.glyph-svg-document.sc-ix-icon:before{content:\"\\EBE9\"}.glyph-swap-left-right.sc-ix-icon:before{content:\"\\EBEA\"}.glyph-table-columns.sc-ix-icon:before{content:\"\\EBEB\"}.glyph-table-rows.sc-ix-icon:before{content:\"\\EBEC\"}.glyph-table-settings.sc-ix-icon:before{content:\"\\EBED\"}.glyph-table.sc-ix-icon:before{content:\"\\EBEE\"}.glyph-tag-filled.sc-ix-icon:before{content:\"\\EBEF\"}.glyph-tag.sc-ix-icon:before{content:\"\\EBF0\"}.glyph-tasks-all.sc-ix-icon:before{content:\"\\EBF1\"}.glyph-tasks-done.sc-ix-icon:before{content:\"\\EBF2\"}.glyph-tasks-open.sc-ix-icon:before{content:\"\\EBF3\"}.glyph-text-document.sc-ix-icon:before{content:\"\\EBF4\"}.glyph-threshold-cancelled.sc-ix-icon:before{content:\"\\EBF5\"}.glyph-threshold-off.sc-ix-icon:before{content:\"\\EBF6\"}.glyph-threshold-on.sc-ix-icon:before{content:\"\\EBF7\"}.glyph-to-be-published.sc-ix-icon:before{content:\"\\EBF8\"}.glyph-to-search.sc-ix-icon:before{content:\"\\EBF9\"}.glyph-topic-filled.sc-ix-icon:before{content:\"\\EBFA\"}.glyph-topic.sc-ix-icon:before{content:\"\\EBFB\"}.glyph-touch-filled.sc-ix-icon:before{content:\"\\EBFC\"}.glyph-touch.sc-ix-icon:before{content:\"\\EBFD\"}.glyph-trashcan-filled.sc-ix-icon:before{content:\"\\EBFE\"}.glyph-trashcan.sc-ix-icon:before{content:\"\\EBFF\"}.glyph-tree.sc-ix-icon:before{content:\"\\EC00\"}.glyph-trend.sc-ix-icon:before{content:\"\\EC01\"}.glyph-triangle-filled.sc-ix-icon:before{content:\"\\EC02\"}.glyph-triangle.sc-ix-icon:before{content:\"\\EC03\"}.glyph-tulip-filled.sc-ix-icon:before{content:\"\\EC04\"}.glyph-tulip.sc-ix-icon:before{content:\"\\EC05\"}.glyph-txt-document.sc-ix-icon:before{content:\"\\EC06\"}.glyph-undo.sc-ix-icon:before{content:\"\\EC07\"}.glyph-ungroup.sc-ix-icon:before{content:\"\\EC08\"}.glyph-unlock-filled.sc-ix-icon:before{content:\"\\EC09\"}.glyph-unlock-plant-filled.sc-ix-icon:before{content:\"\\EC0A\"}.glyph-unlock-plant.sc-ix-icon:before{content:\"\\EC0B\"}.glyph-unlock.sc-ix-icon:before{content:\"\\EC0C\"}.glyph-upload-document-note.sc-ix-icon:before{content:\"\\EC0D\"}.glyph-upload-success.sc-ix-icon:before{content:\"\\EC0E\"}.glyph-upload.sc-ix-icon:before{content:\"\\EC0F\"}.glyph-upper-limit.sc-ix-icon:before{content:\"\\EC10\"}.glyph-user-check-filled.sc-ix-icon:before{content:\"\\EC11\"}.glyph-user-check.sc-ix-icon:before{content:\"\\EC12\"}.glyph-user-filled.sc-ix-icon:before{content:\"\\EC13\"}.glyph-user-management-filled.sc-ix-icon:before{content:\"\\EC14\"}.glyph-user-management.sc-ix-icon:before{content:\"\\EC15\"}.glyph-user-profile-filled.sc-ix-icon:before{content:\"\\EC16\"}.glyph-user-profile.sc-ix-icon:before{content:\"\\EC17\"}.glyph-user-settings-filled.sc-ix-icon:before{content:\"\\EC18\"}.glyph-user-settings.sc-ix-icon:before{content:\"\\EC19\"}.glyph-user.sc-ix-icon:before{content:\"\\EC1A\"}.glyph-validate.sc-ix-icon:before{content:\"\\EC1B\"}.glyph-vdi-folder.sc-ix-icon:before{content:\"\\EC1C\"}.glyph-version-history.sc-ix-icon:before{content:\"\\EC1D\"}.glyph-video-file-filled.sc-ix-icon:before{content:\"\\EC1E\"}.glyph-video-file.sc-ix-icon:before{content:\"\\EC1F\"}.glyph-warning-filled.sc-ix-icon:before{content:\"\\EC20\"}.glyph-warning-rhomb-filled.sc-ix-icon:before{content:\"\\EC21\"}.glyph-warning-rhomb.sc-ix-icon:before{content:\"\\EC22\"}.glyph-warning.sc-ix-icon:before{content:\"\\EC23\"}.glyph-water-bathing.sc-ix-icon:before{content:\"\\EC24\"}.glyph-water-fish.sc-ix-icon:before{content:\"\\EC25\"}.glyph-water-sunbathing.sc-ix-icon:before{content:\"\\EC26\"}.glyph-waveform.sc-ix-icon:before{content:\"\\EC27\"}.glyph-webcam-filled.sc-ix-icon:before{content:\"\\EC28\"}.glyph-webcam.sc-ix-icon:before{content:\"\\EC29\"}.glyph-wlan-off.sc-ix-icon:before{content:\"\\EC2A\"}.glyph-wlan-strength-0.sc-ix-icon:before{content:\"\\EC2B\"}.glyph-wlan-strength-1.sc-ix-icon:before{content:\"\\EC2C\"}.glyph-wlan-strength-2.sc-ix-icon:before{content:\"\\EC2D\"}.glyph-wlan-strength-3.sc-ix-icon:before{content:\"\\EC2E\"}.glyph-work-case-filled.sc-ix-icon:before{content:\"\\EC2F\"}.glyph-work-case.sc-ix-icon:before{content:\"\\EC30\"}.glyph-x-axis-settings.sc-ix-icon:before{content:\"\\EC31\"}.glyph-xls-document.sc-ix-icon:before{content:\"\\EC32\"}.glyph-xml-document.sc-ix-icon:before{content:\"\\EC33\"}.glyph-y-axis-settings.sc-ix-icon:before{content:\"\\EC34\"}.glyph-youtube-filled.sc-ix-icon:before{content:\"\\EC35\"}.glyph-youtube.sc-ix-icon:before{content:\"\\EC36\"}.glyph-zoom-in.sc-ix-icon:before{content:\"\\EC37\"}.glyph-zoom-out.sc-ix-icon:before{content:\"\\EC38\"}.glyph-zoom-selection.sc-ix-icon:before{content:\"\\EC39\"}.sc-ix-icon-h{display:inline-flex;height:1.5rem;width:1.5rem;color:var(--theme-color-std-text)}.sc-ix-icon-h i.sc-ix-icon{color:inherit;transition:color 150ms}.size-12.sc-ix-icon-h{height:0.75rem;width:0.75rem}.size-16.sc-ix-icon-h{height:1rem;width:1rem}.size-32.sc-ix-icon-h{height:2rem;width:2rem}";

const Icon = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.size = undefined;
    this.color = undefined;
    this.name = undefined;
  }
  render() {
    return (h(Host, { style: {
        color: this.color ? `var(--theme-${this.color})` : 'inherit',
      }, class: {
        ['size-12']: this.size === '12',
        ['size-16']: this.size === '16',
        ['size-24']: this.size === '24',
        ['size-32']: this.size === '32',
      } }, h("i", { class: {
        glyph: true,
        [`glyph-${this.name}`]: true,
        'glyph-12': this.size === '12',
        'glyph-16': this.size === '16',
        'glyph-24': this.size === '24',
        'glyph-32': this.size === '32',
      } }, h("slot", null))));
  }
};
Icon.style = iconCss;

export { Icon as ix_icon };
