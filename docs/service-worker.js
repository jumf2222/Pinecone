"use strict";

// Update cache names any time any of the cached files change.
const CACHE_NAME = "static-cache-v2";

// Add list of files to cache here.
const FILES_TO_CACHE = [
  "index.html",
  "global.css",
  "build/bundle.css",
  "build/bundle.js",
  "https://fonts.googleapis.com/icon?family=Material+Icons",
];

self.addEventListener("install", (evt) => {
  console.log("[ServiceWorker] Install");

  evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("[ServiceWorker] Pre-caching offline page");
      return cache.addAll(FILES_TO_CACHE);
    })
  );

  self.skipWaiting();
});

self.addEventListener("activate", (evt) => {
  console.log("[ServiceWorker] Activate");
  // Remove previous cached data from disk.
  evt.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log("[ServiceWorker] Removing old cache", key);
            return caches.delete(key);
          }
        })
      );
    })
  );

  self.clients.claim();
});

self.addEventListener("fetch", (evt) => {
  console.log("[ServiceWorker] Fetch", evt.request.url);
  evt.respondWith(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.match(evt.request).then(function (response) {
        return (
          response ||
          fetch(evt.request).then(function (response) {
            cache.put(evt.request, response.clone());
            return response;
          })
        );
      });
    })
  );
});
