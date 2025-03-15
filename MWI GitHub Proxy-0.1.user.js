// ==UserScript==
// @name         MWI GitHub Proxy
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  将 GitHub raw 资源地址替换为 ghproxy.net 代理地址
// @author       Jayden
// @match        https://amvoidguy.github.io/MWICombatSimulatorTest/dist/index.html
// @match        https://danthegoodman.github.io/cowculator/
// @run-at       document-start
// @grant        none
// @connect      ghproxy.net
// @connect      raw.githubusercontent.com
// ==/UserScript==

(function() {
    'use strict';

    // 原始路径前缀和代理前缀
    const originalPrefix = 'https://raw.githubusercontent.com/holychikenz/MWIApi/';
    const proxyPrefix = 'https://ghproxy.net/' + originalPrefix;

    // 判断是否需要替换的辅助函数
    function shouldReplace(url) {
        return url.startsWith(originalPrefix);
    }

    // 生成代理 URL
    function getProxyUrl(originalUrl) {
        return originalUrl.replace(originalPrefix, proxyPrefix);
    }

    // 替换资源 URL 的函数
    function replaceResourceUrl() {
        // 处理 script 标签
        document.querySelectorAll('script[src]').forEach(script => {
            if (shouldReplace(script.src)) {
                script.src = getProxyUrl(script.src);
            }
        });

        // 处理 link 标签
        document.querySelectorAll('link[href]').forEach(link => {
            if (shouldReplace(link.href)) {
                link.href = getProxyUrl(link.href);
            }
        });

        // 处理 img 标签
        document.querySelectorAll('img[src]').forEach(img => {
            if (shouldReplace(img.src)) {
                img.src = getProxyUrl(img.src);
            }
        });
    }

    // 劫持 XMLHttpRequest
    const originalOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function(method, url) {
        if (shouldReplace(url)) {
            arguments[1] = getProxyUrl(url);
        }
        return originalOpen.apply(this, arguments);
    };

    // 劫持 Fetch API
    const originalFetch = window.fetch;
    window.fetch = function(input, init) {
        let requestUrl = input instanceof Request ? input.url : input;

        if (shouldReplace(requestUrl)) {
            const newUrl = getProxyUrl(requestUrl);
            if (input instanceof Request) {
                input = new Request(newUrl, input);
            } else {
                input = newUrl;
            }
        }
        return originalFetch.call(this, input, init);
    };

    // 使用 MutationObserver 监听 DOM 变化
    const observer = new MutationObserver(replaceResourceUrl);
    observer.observe(document, {
        childList: true,
        subtree: true
    });

    // 初始替换
    replaceResourceUrl();
})();