self.addEventListener("install", function(){
	setTimeout(function(){
    self.registration.showNotification("プッシュタイトル", {
      body: "プッシュ通知",
      icon: "/images/icons/icon-144x144.png",
      tag: "tag",
      url: "https://pwatestuser.github.io/pwatest20170809/test/"
    });
	},5000);
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
  clients.openWindow("/");
}, false);
