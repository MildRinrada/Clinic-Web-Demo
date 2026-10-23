import{s as n}from"./index-VIN9QvDA.js";async function e(t,a){const{data:s}=await n().get("/staff/inventory/alerts",{query:{branch:t,within_days:a}});return s}export{e as l};
