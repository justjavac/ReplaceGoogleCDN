let proxy_domains = ["translate.googleapis.com"];

function encodeBase64(str) {
  return btoa(encodeURIComponent(str));
}

function decodeBase64(encoded) {
  return decodeURIComponent(atob(encoded));
}

function go_proxy(url, host) {
  return proxy_domains.find((currentValue, index, arr) => {
    if (host.indexOf(currentValue) !== -1) {
      return true;
    }
    return undefined;
  }, host);
}

function FindProxyForURL(url, host) {
  if (isPlainHostName(host)) {
    return "DIRECT";
  }
  if (
    isInNet(host, "192.168.0.0", "255.255.0.0") ||
    isInNet(host, "127.0.0.0", "255.0.0.0") ||
    isInNet(host, "10.0.0.0", "255.0.0.0") ||
    isInNet(host, "172.16.0.0", "255.240.0.0")
  ) {
    return "DIRECT";
  }

  if (go_proxy(url, host)) {
    return "PROXY 127.0.0.1:8015; SOCKS5 127.0.0.1:2000; DIRECT";
  }

  return "DIRECT";
}
