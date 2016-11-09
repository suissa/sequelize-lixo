(function(module) {
try { module = angular.module("app.templates"); }
catch(err) { module = angular.module("app.templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("app/components/dashboard/dashboard.html",
    "<div class=\"container\">\n" +
    "    <div class=\"page-header\">\n" +
    "        <h1>Top 3 Heroes</h1>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-2 col-md-offset-5\">\n" +
    "            <span class=\"glyphicon glyphicon-star\" style=\"font-size: 100px;\"></span>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"list-group\">\n" +
    "            <a class=\"list-group-item\" ng-repeat=\"hero in heroes\" ng-link=\"['HeroDetail', {id: hero.id}]\">\n" +
    "                {{hero.name}}\n" +
    "            </a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("app.templates"); }
catch(err) { module = angular.module("app.templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("app/components/hero-detail/hero-detail.html",
    "<div class=\"container\">\n" +
    "    <div *ngIf=\"hero\">\n" +
    "        <div class=\"page-header\">\n" +
    "            <h1>{{hero.name}} details!</h1>\n" +
    "        </div>\n" +
    "\n" +
    "        <form class=\"form-horizontal\">\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"id\" class=\"col-sm-2 control-label\">ID</label>\n" +
    "                <div class=\"col-sm-10\">\n" +
    "                    <input ng-model=\"hero.id\" placeholder=\"id\" disabled=\"disabled\" />\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"name\" class=\"col-sm-2 control-label\">Name</label>\n" +
    "                <div class=\"col-sm-10\">\n" +
    "                    <input ng-model=\"hero.name\" placeholder=\"name\" />\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <div class=\"col-sm-10 col-sm-offset-2\">\n" +
    "                    <button ng-click=\"save()\" type=\"button\" class=\"btn btn-primary\">Save</button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("app.templates"); }
catch(err) { module = angular.module("app.templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("app/components/hero-list/hero-list.html",
    "<div class=\"container\">\n" +
    "    <div class=\"page-header\">\n" +
    "        <h1>My Heroes</h1>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-xs-6\">\n" +
    "            <div class=\"list-group\">\n" +
    "                <a class=\"list-group-item\"\n" +
    "                    ng-repeat=\"hero in heroes\"\n" +
    "                    ng-click=\"onSelect(hero)\"\n" +
    "                    ng-class=\"{active: selectedHero==hero}\">\n" +
    "                    {{hero.name}}\n" +
    "                </a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-xs-6\" ng-if=\"selectedHero\">\n" +
    "            <h4>{{selectedHero.name | uppercase}} is my hero</h4>\n" +
    "            <p>ID: {{selectedHero.id}}</p>\n" +
    "            <button ng-click=\"gotoDetail()\" type=\"button\" class=\"btn btn-primary\">Edit</button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("app.templates"); }
catch(err) { module = angular.module("app.templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("app/components/login/login.html",
    "<div class=\"container\">\n" +
    "\n" +
    "  <form class=\"form-signin\">\n" +
    "    <h1 class=\"form-signin-heading\">LOGIN</h1>\n" +
    "    <label for=\"inputEmail\" class=\"sr-only\">Código da EMPRESA</label>\n" +
    "    <input type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Código da EMPRESA\" required autofocus>\n" +
    "    <label for=\"inputPassword\" class=\"sr-only\">Usuário</label>\n" +
    "    <input type=\"text\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Usuário\" required>\n" +
    "    <label for=\"inputPassword\" class=\"sr-only\">Senha</label>\n" +
    "    <input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required>\n" +
    "    <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Sign in</button>\n" +
    "  </form>\n" +
    "\n" +
    "</div>");
}]);
})();

(function(module) {
try { module = angular.module("app.templates"); }
catch(err) { module = angular.module("app.templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("app/components/menu/menu.html",
    "<nav class=\"navbar navbar-default\" role=\"navigation\">\n" +
    "  <div class=\"container-fluid\">\n" +
    "    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n" +
    "      <ul class=\"nav navbar-nav\">\n" +
    "        <li><a href=\"#\">HOME</a></li>\n" +
    "        <li><a href=\"#\">Stories</a></li>\n" +
    "        <li><a href=\"#\">Videos</a></li>\n" +
    "        <li><a href=\"#\">Photos</a></li>\n" +
    "      </ul>\n" +
    "    </div><!-- /.navbar-collapse -->\n" +
    "  </div><!-- /.container-fluid -->\n" +
    "</nav>");
}]);
})();

(function(module) {
try { module = angular.module("app.templates"); }
catch(err) { module = angular.module("app.templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("app/components/navigation/navigation.html",
    "<nav class=\"navbar navbar-default\">\n" +
    "    <div class=\"container\">\n" +
    "        <div id=\"navbar\" class=\"navbar-collapse collapse\">\n" +
    "            <ul class=\"nav navbar-nav\">\n" +
    "                <li><a href=\"#\">HOME</a></li>\n" +
    "                <li><a href=\"#\">Intrumentos</a></li>\n" +
    "                <li><a href=\"#\">Validação</a></li>\n" +
    "                <li><a href=\"#\">Relatórios</a></li>\n" +
    "            </ul>\n" +
    "        </div><!--/.nav-collapse -->\n" +
    "    </div>\n" +
    "</nav>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("app.templates"); }
catch(err) { module = angular.module("app.templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("app/components/painel/painel.html",
    "<div class=\"container\">\n" +
    "\n" +
    "    <menu></menu>\n" +
    "    <div class=\"page-header\">\n" +
    "        <h1>Painel Administrativo</h1>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-2 col-md-offset-5\">\n" +
    "            <span class=\"glyphicon glyphicon-star\" style=\"font-size: 100px;\"></span>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "        <h2>Validações Pendentes</h2>\n" +
    "        <div class=\"list-group\">\n" +
    "            <a class=\"list-group-item\" ng-repeat=\"hero in heroes\" ng-link=\"['HeroDetail', {id: hero.id}]\">\n" +
    "                {{hero.name}}\n" +
    "            </a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("app.templates"); }
catch(err) { module = angular.module("app.templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("app/components/validacoes-lista/validacoes-lista.html",
    "<div class=\"container\">\n" +
    "    <div class=\"page-header\">\n" +
    "        <h1>Validações Pendentes</h1>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-xs-6\">\n" +
    "            <div class=\"list-group\">\n" +
    "                <a class=\"list-group-item\"\n" +
    "                    ng-repeat=\"validacao in validacoes\"\n" +
    "                    ng-click=\"onSelect(validacao)\"\n" +
    "                    ng-class=\"{active: selectedValidacao==validacao}\">\n" +
    "                    {{validacao.name}}\n" +
    "                </a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-xs-6\" ng-if=\"selectedValidacao\">\n" +
    "            <h4>{{selectedValidacao.name | uppercase}} is my validacao</h4>\n" +
    "            <p>ID: {{selectedValidacao.id}}</p>\n" +
    "            <button ng-click=\"gotoDetail()\" type=\"button\" class=\"btn btn-primary\">Edit</button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);
})();
