angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('/index.html','<!doctype html>\r\n<html lang=\"en\" ng-app=\"route-test-app\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <title>Route test app</title>\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n    <meta name=\"viewport\" content=\"width=device-width\">\r\n    <meta name=\"fragment\" content=\"!\" />\r\n\r\n    <link rel=\"icon\" type=\"image/png\" href=\"./assets/images/favicon-87262a9751.png\" />\r\n    <!-- build:css ./<%= config.paths.destAssetsRelative %>/<%= config.paths.src.scss.vendors.outputFilename %> -->\r\n        <link rel=\"stylesheet\" href=\"bower_components/ng-sortable/dist/ng-sortable.css\"/>\r\n        <link rel=\"stylesheet\" href=\"bower_components/ng-notify/dist/ng-notify.min.css\"/>\r\n        <!-- inject:css (assets/**/*.css) -->\r\n        \r\n        <!-- endinject -->\r\n    <!-- endbuild -->\r\n    <link rel=\"stylesheet\" href=\"./<%= config.paths.destAssetsRelative %>/<%= config.paths.src.scss.main.outputFilename %>\"/>\r\n</head>\r\n<body>\r\n    <div class=\"app\">\r\n        <route-editor></route-editor>\r\n    </div>\r\n    <script src=\"https://api-maps.yandex.ru/2.1/?lang=ru_RU\" defer></script>\r\n    <!-- build:js ./<%= config.paths.destAssetsRelative %>/<%= config.paths.src.js.vendors.outputFilename %> defer-->\r\n        <!-- inject:js:bower -->\r\n        <script src=\"bower_components/angular/angular.js\"></script>\r\n        <script src=\"bower_components/ng-sortable/dist/ng-sortable.js\"></script>\r\n        <script src=\"bower_components/ng-notify/src/scripts/ng-notify.js\"></script>\r\n        <script src=\"bower_components/lodash/lodash.js\"></script>\r\n        <!-- endinject -->\r\n    <!-- endbuild -->\r\n    <!-- build:js ./<%= config.paths.destAssetsRelative %>/<%= config.paths.src.js.app.outputFilename %> defer-->\r\n        <!-- inject:js:app (src/**/*.module.js) -->\r\n        <script src=\"src/route-test-app/route-test-app.module.js\"></script>\r\n        <script src=\"src/svg-icons/svg-icons.module.js\"></script>\r\n        <script src=\"src/vendors/vendors.module.js\"></script>\r\n        <!-- endinject -->\r\n        <!-- inject:js:app (src/**/!(*.module|*.spec).js) -->\r\n        <script src=\"src/route-test-app/components/route-editor/RouteEditorCtrl.controller.js\"></script>\r\n        <script src=\"src/route-test-app/components/route-editor/route-editor.directive.js\"></script>\r\n        <script src=\"src/route-test-app/components/yandex-map/YandexMapCtrl.controller.js\"></script>\r\n        <script src=\"src/route-test-app/components/yandex-map/YandexMapLoader.factory.js\"></script>\r\n        <script src=\"src/route-test-app/components/yandex-map/yandex-map.directive.js\"></script>\r\n        <script src=\"src/route-test-app/decorators/ngNotify.decorator.js\"></script>\r\n        <script src=\"src/route-test-app/route-test-app.config.js\"></script>\r\n        <script src=\"src/route-test-app/route-test-app.consts.js\"></script>\r\n        <script src=\"src/route-test-app/services/Geolocation.service.js\"></script>\r\n        <script src=\"src/svg-icons/blocks/svg-icon/svg-icon.directice.js\"></script>\r\n        <script src=\"src/svg-icons/services/SvgIcons.provider.js\"></script>\r\n        <!-- endinject -->\r\n    <!-- endbuild -->\r\n    <script src=\"./<%= config.paths.destAssetsRelative %>/<%= config.paths.src.templates.outputFilename %>\" defer></script>\r\n</body>\r\n</html>');
$templateCache.put('/src/svg-icons/blocks/svg-icon/svg-icon.html','<svg class=\"svg-icon\" ng-class=\"[\'svg-icon_size_\' + size, \'svg-icon_type_\' + type]\">\r\n    <use xlink:href=\"\" ng-href=\"{{\'#\' + type}}\"></use>\r\n</svg>');
$templateCache.put('/src/route-test-app/components/route-editor/route-editor.html','<main class=\"route-editor\">\r\n    <aside class=\"route-editor__management\">\r\n        <input type=\"text\"\r\n               class=\"route-editor__adder\"\r\n               placeholder=\"Введите название точки...\"\r\n               ng-model=\"routeEditor.pointName\"\r\n               ng-keydown=\"routeEditor.addPoint($event, routeEditor.pointName)\"/>\r\n        <p class=\"route-editor__no-points-text\" ng-hide=\"routeEditor.points.length\">Не добавлено ни одной точки</p>\r\n        <ul class=\"route-points\"\r\n            as-sortable=\"routeEditor.sortingOptions\"\r\n            ng-model=\"routeEditor.points\">\r\n            <li class=\"route-points__point\"\r\n                ng-repeat=\"point in routeEditor.points track by point.coordinates.join(\'|\')\"\r\n                as-sortable-item>\r\n                <div as-sortable-item-handle>\r\n                    <svg-icon class=\"route-points__point-icon\"\r\n                              type=\"circle\"\r\n                              size=\"medium\"\r\n                              ng-style=\"routeEditor.getPointStyle($index)\"></svg-icon>\r\n                    <span class=\"route-points__point-name\">\r\n                        {{:: point.name }}\r\n                    </span>\r\n                    <button class=\"route-points__point-remove\" ng-click=\"routeEditor.removePoint(point)\">\r\n                        <svg-icon type=\"remove\" size=\"small\"></svg-icon>\r\n                    </button>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n    </aside>\r\n    <yandex-map class=\"route-editor__map\"\r\n                map-api=\"routeEditor.map\"\r\n                route=\"routeEditor.points\"\r\n                on-drag-point=\"routeEditor.onDragPoint(index, coordinates)\">\r\n    </yandex-map>\r\n</main>');
$templateCache.put('/src/route-test-app/components/yandex-map/yandex-map.html','<div class=\"yandex-map\" ng-class=\"{\r\n    \'yandex-map_loading\': vm.isLoading,\r\n    \'yandex-map_loaded\': !vm.isLoading\r\n}\">\r\n\r\n</div>');}]);