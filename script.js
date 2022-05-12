"use strict";
let MobileMenuToggle = document.querySelector("#MobileMenuToggle");
let overLayLayer = document.querySelector("#overlay");
let sideBar = document.querySelector("aside");
let chart1 = document.querySelector("#chart1");
let chart2 = document.querySelector("#chart2");
let chart3 = document.querySelector("#chart3");
let sideBarIsOpen = false;
MobileMenuToggle.onclick = () => {
    sideBar.classList.toggle("isOpen");
    overLayLayer.classList.toggle("isActive");
    sideBarIsOpen = !sideBarIsOpen;
    if (sideBarIsOpen) {
        MobileMenuToggle.src = "images/close.png";
    }
    else {
        MobileMenuToggle.src = "images/hamburger.png";
    }
};
const chart1Data = {
    labels: ["Data1", "Data2", "Data3", "Data4"],
    datasets: [
        {
            label: "Dataset 1",
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgb(54, 162, 235)",
            borderWidth: 1,
            data: [20, 30, 45, 52],
        },
        {
            label: "Dataset 2",
            backgroundColor: "rgba(255, 205, 86, 0.2)",
            borderColor: "rgb(255, 205, 86)",
            borderWidth: 1,
            data: [10, 15, 24, 35],
        },
    ],
};
const chart1Config = {
    type: "bar",
    data: chart1Data,
    options: {
        responsive: true,
        maintainAspectRatio: false,
    },
};
const chart2Data = {
    labels: ["Data 1", "Data 2", "Data 3"],
    datasets: [
        {
            label: "Dataset 1",
            data: [300, 150, 100],
            backgroundColor: [
                "rgba(255, 99, 132, 0.8)",
                "rgba(54, 162, 235, 0.8)",
                "rgba(255, 205, 86, 0.8)",
            ],
            hoverOffset: 4,
        },
    ],
};
const chart2Config = {
    type: "pie",
    data: chart2Data,
    options: {
        responsive: true,
        maintainAspectRatio: false,
    },
};
const chart3Data = {
    labels: ["Data1", "Data2", "Data3", "Data4", "Data5", "Data6", "Data7"],
    datasets: [
        {
            label: "Dataset 1",
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: "rgba(54, 162, 235, 0.5)",
            tension: 0.1,
        },
        {
            label: "Dataset 2",
            data: [45, 72, 109, 55, 24, 115, 94],
            fill: false,
            borderColor: "rgba(255, 205, 86, 0.5)",
            tension: 0.1,
        },
        {
            label: "Dataset 3",
            data: [82, 35, 60, 91, 84, 76, 94],
            fill: false,
            borderColor: "rgba(255, 99, 132, 0.5)",
            tension: 0.1,
        },
    ],
};
const chart3Config = {
    type: "line",
    data: chart3Data,
    options: {
        responsive: true,
        maintainAspectRatio: false,
    },
};
new Chart(chart1, chart1Config);
new Chart(chart2, chart2Config);
new Chart(chart3, chart3Config);
