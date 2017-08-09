self.addEventListener("onload", function(){
	setTimeout(function(){
    self.registration.showNotification("プッシュタイトル", {
      body: "プッシュ通知",
      icon: "/images/icons/icon-144x144.png",
      tag: "tag"
    });
	},8000);
});

self.addEventListener("push", function(event){
  event.waitUntil().then(function(res){
    self.registration.showNotification("プッシュタイトル", {
      body: "プッシュ通知",
      icon: "/images/icons/icon-144x144.png",
      tag: "tag"
    });
  });
});


self.addEventListener("notificationclick", function(event) {
  event.notification.close();
  clients.openWindow("https://pwatestuser.github.io/pwatest20170809/test/");
}, false);
