self.addEventListener("push", function(event){
  event.waitUntil().then(function(res){
    self.registration.showNotification("�v�b�V���^�C�g��", {
      body: "�v�b�V���ʒm",
      icon: "/images/icons/icon-144x144.png",
      tag: "tag"
    });
  });
});
self.addEventListener("notificationclick", function(event) {
  event.notification.close();
  clients.openWindow("/");
}, false);