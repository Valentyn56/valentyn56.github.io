function createWrappers(e,t,n){var a=document.createElement("div");a.classList.add("hovermenu-wrapper"),e.appendChild(a);var s=document.createElement("div");s.classList.add("hovermenu-wrapper"),n.appendChild(s);var o=document.createElement("div");o.classList.add("hovermenu-wrapper"),t.appendChild(o),addElements(e,t,n)}function addElement(e,t,n,a){var s=document.createElement("a"),o=document.createTextNode(e);1==a?(s.setAttribute("target","_blank"),s.setAttribute("href",t)):s.setAttribute("href",t),s.setAttribute("role","link"),s.setAttribute("aria-label",""),s.classList.add("hovermenu-link"),s.classList.add("contentpagelink"),s.appendChild(o),n.getElementsByClassName("hovermenu-wrapper")[0].appendChild(s)}function addElements(e,t,n){addElement("VivaTech News","https://app.vivatechnology.com/content/vivatech-news",e,!1),addElement("Stage One","https://app.vivatechnology.com/room/d225f246-3bbe-eb11-94b3-000d3a219024",e,!1),addElement("Stage 2","https://app.vivatechnology.com/room/d8d3092a-37be-eb11-94b3-000d3a219024",e,!1),addElement("Stage 3","https://app.vivatechnology.com/room/e6652f30-37be-eb11-94b3-000d3a219024",e,!1),addElement("Schedule","https://app.vivatechnology.com/content/schedule",e,!1),addElement("Speakers","https://app.vivatechnology.com/speakers",e,!1),addElement("Exhibitors & Startups List","https://app.vivatechnology.com/partners",t,!1),addElement("Innovation Parks & Showrooms","https://app.vivatechnology.com/content/parks-showrooms",t,!1),addElement("Innovations & Solutions List","https://app.vivatechnology.com/content/innovation-liste",t,!1),addElement("Main Topics","https://app.vivatechnology.com/content/main-topics",t,!1),addElement("Networking Hub","https://app.vivatechnology.com/content/networking-hub",n,!1),addElement("Side Events","https://app.vivatechnology.com/content/side-events-list",n,!1),addElement("Find a Job","https://vivatech.myjobboard.fr/",n,!0)}setTimeout(function(){if(0==document.getElementsByClassName("hovermenu-link").length){var e=document.getElementById("Appheader").getElementsByClassName("menu")[0].getElementsByClassName("iconlink")[0],t=document.getElementById("Appheader").getElementsByClassName("menu")[0].getElementsByClassName("iconlink")[1],n=document.getElementById("Appheader").getElementsByClassName("menu")[0].getElementsByClassName("iconlink")[2];try{createWrappers(e,t,n)}catch(e){console.warn(e)}setTimeout(function(){if(null!==e||null!==t||null!==n)console.log("variables chargées : OK");else{console.log("variables non chargées, nouvelle tentative.");var e=document.getElementById("Appheader").getElementsByClassName("menu")[0].getElementsByClassName("iconlink")[0],t=document.getElementById("Appheader").getElementsByClassName("menu")[0].getElementsByClassName("iconlink")[1],n=document.getElementById("Appheader").getElementsByClassName("menu")[0].getElementsByClassName("iconlink")[2];setTimeout(function(){0==document.getElementsByClassName("hovermenu-link").length?createWrappers(e,t,n):console.log("Menu already exists")},500)}},7e3)}else console.log("Menu already exists")},1500);