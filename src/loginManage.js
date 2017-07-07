(function (angular) {
    var loginManage = angular.module("loginManage", [
        "login",
        "register",
        "ngRoute",
        "ngCookies"
    ]);
    loginManage.config(["$locationProvider", function ($locationProvider) {
        $locationProvider.hashPrefix("");
    }]);

    loginManage.controller("myCtrl", ["$scope", "$http", "$cookieStore", "$window", function ($scope, $http, $cookieStore, $window) {
        $scope.ischecked = false;
        // form表单数据
        $scope.formdata = {}
        // checked 事件
        $scope.checked = function () {
            $scope.ischecked = !$scope.ischecked
            console.log($scope.ischecked);
        }

        var hasCookies = $cookieStore.get("uname")
        console.log(hasCookies);
        if (hasCookies) {
            $scope.formdata.uname = hasCookies.uname;
            $scope.ischecked = hasCookies.ischecked
        }


        // 注册事件
        $scope.login = function () {
            // console.log($scope.formdata.uname);

            if ($scope.ischecked) {

                // ajax
                $http({
                    url: "http://127.0.0.1:9090/api/login",
                    method: "get",
                    params: $scope.formdata,
                }).then(function (res) {
                    if (res.data == "true") {
                        alert("登录成功")
                        var expireDate = new Date();
                        expireDate.setDate(expireDate.getDate() + 3);
                        // 保存账户和设置cookie过期时间
                        $cookieStore.put("uname", {
                            uname: $scope.formdata.uname,
                            ischecked: true
                        }, {
                            'expires': expireDate
                        })
                        var uname = $cookieStore.get("uname");
                        $window.location.href = "./index1.html"
                    } else {
                        alert("登录失败")
                        $window.location.reload()
                    };
                }).catch(function () {
                    console.log("失败");
                })

            } else {
                console.log("没选中");
                $cookieStore.remove('uname');
                $http({
                    url: "http://127.0.0.1:9090/api/login",
                    method: "get",
                    params: $scope.formdata,
                }).then(function (res) {
                    if (res.data == "true") {
                        alert("登录成功")
                        $window.location.href = "./index1.html"
                    } else {
                        alert("登录失败")
                        $window.location.reload()
                    };
                }).catch(function () {
                    console.log("失败");
                })


            }
            return false
        }



        $scope.register = function () {
            console.log("register");
            return false
        }


        //底部borderbottom
        $scope.loginTpl = function () {
            $scope.isTouch = true;
        }
        $scope.registerTpl = function () {
            $scope.isTouch = false;
        }
    }])

})(angular)