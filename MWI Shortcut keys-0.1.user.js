// ==UserScript==
// @name         MWI Shortcut keys
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  MWI Shortcut keys
// @author       Jayden
// @match        https://www.milkywayidle.com/*
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    document.addEventListener('keydown', function(event) {
        if (event.key.toLowerCase() === 'b' && !event.ctrlKey && !event.altKey) {
            event.preventDefault(); // 阻止默认行为（如输入字符）
            triggerClickBack();
        }
    });

    function triggerClickBack() {
        const xpath = "/html/body/div/div/div/div[2]/div[2]/div[1]/div[1]/div/div[1]/div/div[3]/div/div[2]/div[1]/div/div[2]/button[1]";
        const result = document.evaluate(
            xpath,
            document,
            null,
            XPathResult.FIRST_ORDERED_NODE_TYPE,
            null
        );
        const targetElement = result.singleNodeValue;
        if (targetElement) {
            targetElement.click();
            console.log("元素已点击");
        } else {
            console.warn("未找到目标元素");
        }
    };

    document.addEventListener('keydown', function(event) {
        if (event.key.toLowerCase() === 'd' && !event.ctrlKey && !event.altKey) {
            event.preventDefault(); // 阻止默认行为（如输入字符）
            triggerClickDict();
        }
    });

    function triggerClickDict() {
        const xpath = "/html/body/div[2]/div/div/button[4]";
        const result = document.evaluate(
            xpath,
            document,
            null,
            XPathResult.FIRST_ORDERED_NODE_TYPE,
            null
        );
        const targetElement = result.singleNodeValue;
        if (targetElement) {
            targetElement.click();
            console.log("元素已点击");
        } else {
            console.warn("未找到目标元素");
        }
    };

    document.addEventListener('keydown', function(event) {
        if (event.key.toLowerCase() === 'm' && !event.ctrlKey && !event.altKey) {
            event.preventDefault(); // 阻止默认行为（如输入字符）
            triggerClickMarket();
        }
    });

    function triggerClickMarket() {
        const xpath = "/html/body/div[2]/div/div/button[2]";
        const result = document.evaluate(
            xpath,
            document,
            null,
            XPathResult.FIRST_ORDERED_NODE_TYPE,
            null
        );
        const targetElement = result.singleNodeValue;
        if (targetElement) {
            targetElement.click();
            console.log("元素已点击");
        } else {
            console.warn("未找到目标元素");
        }
    };

    document.addEventListener('keydown', function(event) {
        if (event.key.toLowerCase() === 'a' && !event.ctrlKey && !event.altKey) {
            event.preventDefault(); // 阻止默认行为（如输入字符）
            triggerClickAlchemy();
        }
    });

    function triggerClickAlchemy() {
        const xpath = "/html/body/div[2]/div/div/button[1]";
        const result = document.evaluate(
            xpath,
            document,
            null,
            XPathResult.FIRST_ORDERED_NODE_TYPE,
            null
        );
        const targetElement = result.singleNodeValue;
        if (targetElement) {
            targetElement.click();
            console.log("元素已点击");
        } else {
            console.warn("未找到目标元素");
        }
    };

    document.addEventListener('keydown', function(event) {
        if (event.key.toLowerCase() === 'c' && !event.ctrlKey && !event.altKey) {
            event.preventDefault(); // 阻止默认行为（如输入字符）
            triggerClickClose();
        }
    });

    function triggerClickClose() {
        const xpath = "/html/body/div/div/div/div[4]/div[2]/div[2]";
        const result = document.evaluate(
            xpath,
            document,
            null,
            XPathResult.FIRST_ORDERED_NODE_TYPE,
            null
        );
        const targetElement = result.singleNodeValue;
        if (targetElement) {
            targetElement.click();
            console.log("元素已点击");
        } else {
            console.warn("未找到目标元素");
        }
    }
})();