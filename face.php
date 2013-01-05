<?php

define('YOUR_APP_ID', 'YOUR APP ID');

//uses the PHP SDK.  Download from https://github.com/facebook/php-sdk
require 'facebook.php';

$facebook = new Facebook(array(
  'appId'  => 110880615751032,
  'secret' => ' b5c4fe52d257790dc017a4c8c875f7e3',
));

$userId = $facebook->getUser();

?>

<html>
  <body>
    <div id="fb-root"></div>
    <?php if ($userId) { 
      $userInfo = $facebook->api('/' . $userId); ?>
      Welcome <?= $userInfo['name'] ?>
    <?php } else { ?>
    <fb:login-button></fb:login-button>
    <?php } ?>


        <div id="fb-root"></div>
        <script>
          window.fbAsyncInit = function() {
            FB.init({
              appId      : '110880615751032', // App ID
              channelUrl : '//WWW.YOUR_DOMAIN.COM/channel.html', // Channel File
              status     : true, // check login status
              cookie     : true, // enable cookies to allow the server to access the session
              xfbml      : true  // parse XFBML
            });
        FB.Event.subscribe('auth.login', function(response) {
          window.location.reload();
        });
          };
          // Load the SDK Asynchronously
          (function(d){
             var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
             if (d.getElementById(id)) {return;}
             js = d.createElement('script'); js.id = id; js.async = true;
             js.src = "//connect.facebook.net/en_US/all.js";
             ref.parentNode.insertBefore(js, ref);
           }(document));
        </script>

  </body>
</html>