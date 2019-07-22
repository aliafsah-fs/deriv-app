(window.webpackJsonp=window.webpackJsonp||[]).push([["smart_chart"],{705:function(t,e,r){"use strict";r.r(e);var o=r(694),a=r(1),n=r.n(a),s=r(0),i=r.n(s),c=r(20),l=r(9),u=function(t){var e=t.Digits;return i.a.createElement("div",{className:"bottom-widgets"},e)};u.propTypes={Digits:n.a.node};var p=u,h=function(t){var e=t.updateChartType,r=t.updateGranularity;return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.CrosshairToggle,null),i.a.createElement(o.ChartTypes,{onChange:e}),i.a.createElement(o.StudyLegend,{searchInputClassName:"data-hj-whitelist"}),i.a.createElement(o.Comparison,{searchInputClassName:"data-hj-whitelist"}),i.a.createElement(o.DrawTools,null),i.a.createElement(o.Views,{searchInputClassName:"data-hj-whitelist"}),i.a.createElement(o.Share,null),i.a.createElement(o.Timeperiod,{onChange:r}),i.a.createElement(o.ChartSize,null))};h.propTypes={updateChartType:n.a.func,updateGranularity:n.a.func};var _=h,m=r(2);function d(t,e){if(null==t)return{};var r,o,a=function(t,e){if(null==t)return{};var r,o,a={},n=Object.keys(t);for(o=0;o<n.length;o++)r=n[o],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(o=0;o<n.length;o++)r=n[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var y=function(t){var e=t.marker_config,r=t.marker_content_props,a=t.is_bottom_widget_visible,n=e.ContentComponent,s=d(e,["ContentComponent"]);return i.a.createElement(o.FastMarker,{markerRef:function(t){if(t){if(!s.y){var e=24+(a?115:0);t.div.style.height="calc(100% - ".concat(e,"px)"),t.div.style.zIndex="-1"}t.setPosition({epoch:+s.x,price:+s.y})}}},i.a.createElement(n,Object(m.toJS)(r)))};y.propTypes={marker_config:n.a.object,marker_content_props:n.a.object};var b=y,f=function(t){var e=t.InfoBox,r=t.is_title_enabled,a=void 0===r||r,n=t.onSymbolChange;return i.a.createElement(i.a.Fragment,null,e,i.a.createElement(o.ChartTitle,{enabled:a,onChange:n,searchInputClassName:"data-hj-whitelist"}),i.a.createElement(o.AssetInformation,null))};f.propTypes={InfoBox:n.a.node,is_title_enabled:n.a.bool,onSymbolChange:n.a.func};var g=f,w=function(t){return t&&function(e){t({target:{name:"symbol",value:e}})}};function C(t){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function v(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function S(t,e){return!e||"object"!==C(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function E(t){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function j(t,e){return(j=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}Object(o.setSmartChartsPublicPath)(Object(c.getUrlBase)("/js/smartcharts/"));var k=function(t){function e(){var t,r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var o=arguments.length,a=new Array(o),n=0;n<o;n++)a[n]=arguments[n];return(r=S(this,(t=E(e)).call.apply(t,[this].concat(a)))).chartControlsWidgets=function(){return i.a.createElement(_,{updateChartType:r.props.updateChartType,updateGranularity:r.props.updateGranularity})},r.topWidgets=function(){return i.a.createElement(g,{InfoBox:r.props.InfoBox,is_title_enabled:r.props.is_title_enabled,onSymbolChange:w(r.props.onSymbolChange)})},r.bottomWidgets=function(){return i.a.createElement(p,{Digits:r.props.Digits})},r}var r,a,n;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&j(t,e)}(e,i.a.Component),r=e,(a=[{key:"componentDidMount",value:function(){this.props.onMount()}},{key:"componentWillUnmount",value:function(){this.props.onUnmount()}},{key:"render",value:function(){var t=this;return i.a.createElement(o.SmartChart,{barriers:this.props.barriers_array,bottomWidgets:this.props.should_show_bottom_widgets?this.bottomWidgets:null,chartControlsWidgets:this.props.is_contract_mode?null:this.chartControlsWidgets,chartStatusListener:this.props.getChartStatus,chartType:this.props.chart_type,endEpoch:this.props.end_epoch,margin:this.props.margin||null,id:this.props.chart_id,isMobile:this.props.is_mobile,granularity:this.props.granularity,requestAPI:this.props.wsSendRequest,requestForget:this.props.wsForget,requestForgetStream:this.props.wsForgetStream,requestSubscribe:this.props.wsSubscribe,settings:this.props.settings,showLastDigitStats:this.props.should_show_last_digit_stats,startEpoch:this.props.start_epoch,scrollToEpoch:this.props.scroll_to_epoch,scrollToEpochOffset:this.props.scroll_to_offset,symbol:this.props.symbol,topWidgets:this.topWidgets,isConnectionOpened:this.props.is_socket_opened,clearChart:this.props.should_clear_chart,importedLayout:this.props.should_import_layout?this.props.trade_chart_layout:null,onExportLayout:this.props.should_export_layout?this.props.exportLayout:null,isStaticChart:this.props.is_static_chart,shouldFetchTradingTimes:!this.props.end_epoch,refreshActiveSymbols:this.props.should_refresh_active_symbols},this.props.markers_array.map(function(e,r){return i.a.createElement(b,{key:r,marker_config:e.marker_config,marker_content_props:e.content_config,is_bottom_widget_visible:t.props.should_show_bottom_widgets})}))}}])&&v(r.prototype,a),n&&v(r,n),e}();k.propTypes={barriers_array:n.a.array,BottomWidgets:n.a.node,chart_id:n.a.string,chart_type:n.a.string,end_epoch:n.a.number,exportLayout:n.a.func,getChartStatus:n.a.func,granularity:n.a.number,InfoBox:n.a.node,is_contract_mode:n.a.bool,is_mobile:n.a.bool,is_socket_opened:n.a.bool,is_static_chart:n.a.bool,is_title_enabled:n.a.bool,margin:n.a.number,markers_array:n.a.array,onMount:n.a.func,onSymbolChange:n.a.func,onUnmount:n.a.func,replay_controls:n.a.object,scroll_to_epoch:n.a.number,scroll_to_epoch_offset:n.a.number,settings:n.a.object,should_clear_chart:n.a.bool,should_export_layout:n.a.bool,should_import_layout:n.a.bool,should_refresh_active_symbols:n.a.bool,should_show_last_digit_stats:n.a.bool,start_epoch:n.a.number,symbol:n.a.string,trade_chart_layout:n.a.object,updateChartType:n.a.func,updateGranularity:n.a.func,wsForget:n.a.func,wsForgetStream:n.a.func,wsSendRequest:n.a.func,wsSubscribe:n.a.func};var O=Object(l.b)(function(t){var e=t.modules,r=t.ui;return{is_socket_opened:t.common.is_socket_opened,barriers_array:e.smart_chart.barriers_array,exportLayout:e.smart_chart.exportLayout,getChartStatus:e.smart_chart.getChartStatus,is_contract_mode:e.smart_chart.is_contract_mode,is_title_enabled:e.smart_chart.is_title_enabled,margin:e.smart_chart.margin,markers_array:e.smart_chart.markers_array,onMount:e.smart_chart.onMount,onUnmount:e.smart_chart.onUnmount,settings:e.smart_chart.settings,should_clear_chart:e.smart_chart.should_clear_chart,should_export_layout:e.smart_chart.should_export_layout,should_import_layout:e.smart_chart.should_import_layout,should_refresh_active_symbols:e.smart_chart.should_refresh_active_symbols,trade_chart_layout:e.smart_chart.trade_chart_layout,updateChartType:e.smart_chart.updateChartType,updateGranularity:e.smart_chart.updateGranularity,wsForget:e.smart_chart.wsForget,wsForgetStream:e.smart_chart.wsForgetStream,wsSendRequest:e.smart_chart.wsSendRequest,wsSubscribe:e.smart_chart.wsSubscribe,is_mobile:r.is_mobile}})(k);r.d(e,"default",function(){return O})}}]);
//# sourceMappingURL=smart_chart.b176561631e8c04c6514.js.map