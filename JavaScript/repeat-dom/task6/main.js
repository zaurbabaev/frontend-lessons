"use strict"

const formElem = document.querySelector("form");
const tbody = document.querySelector("table tbody");
const submitBtn = formElem.querySelector("button");
const searchInput = document.getElementById("searchInput");
const sortBtns = document.querySelectorAll(".sortBtn");
const totalResult = document.getElementById("totalResult");
const btns = document.getElementById("btns");

let users = [];
const PAGE_SIZE = 10;
let currentPage = 1;
let lastList = [];


let localData = JSON.parse(localStorage.getItem("users"));
if (localData) {
    users = localData;
    userRender();
}

let id = 0;
let localId = JSON.parse(localStorage.getItem("id"));
if (localId) {
    id = localId;
}

let isEdit = false;
let globalId = null;

// --------------------- Form submit -----------------------
formElem.addEventListener("submit", e => {
    e.preventDefault();

    const fullName = formElem.fullName.value.trim();
    const email = formElem.email.value.trim();
    const password = formElem.password.value.trim();

    if (!fullName || !email || !password) {
        alert("Bütün xanaları doldurun");
        return;
    }

    if (!isEdit) {
        const userExist = users.find(user => user.email === email);
        if (userExist) {
            alert("Bu email artıq istifadə olunub");
            return;
        }

        users.push({
            id: ++id,
            fullName,
            email,
            password
        });
        localStorage.setItem("id", id);
    }
    else {
        const emailExist = users.find(
            user => user.email === email && user.id !== globalId
        );

        if (emailExist) {
            alert("Bu email artıq başqa istifadəçidə var");
            return;
        }

        const userExist = users.find(user => user.id === globalId);
        if (!userExist) return;

        userExist.fullName = fullName;
        userExist.email = email;
        userExist.password = password;
    }

    localStorage.setItem("users", JSON.stringify(users));

    isEdit = false;
    globalId = null;
    submitBtn.textContent = "Add User";
    formElem.reset();

    userRender();
});



// --------------------- Search -----------------------
searchInput.addEventListener("input", () => {
    const val = searchInput.value.trim().toLowerCase();

    if (!val) {
        userRender(users);
        return;
    }

    const filteredUsers = users.filter(user =>
        user.fullName.toLowerCase().includes(val)
        ||
        user.email.toLowerCase().includes(val)
    );
    userRender(filteredUsers);
})



// --------------------- Sorting -----------------------
let sortState = {};

sortBtns.forEach(btn => {
    const key = btn.dataset.key;
    const icon = btn.querySelector(".sort-icon");
    sortState[key] = null;

    btn.addEventListener("click", () => {
        sortBtns.forEach(b => {
            if (b !== btn) {
                const i = b.querySelector(".sort-icon");
                i.textContent = "↕";
                sortState[b.dataset.key] = null;
            }
        });

        if (sortState[key] === "asc") {
            users.sort((a, b) => b[key].localeCompare(a[key]));
            sortState[key] = "desc";
            icon.textContent = "▼";
        }
        else {
            users.sort((a, b) => a[key].localeCompare(b[key]));
            sortState[key] = "asc";
            icon.textContent = "▲";
        }
        userRender();
    });
});

function editUser(id) {
    isEdit = true;
    globalId = id;

    const foundUser = users.find(user => user.id === id);
    if (!foundUser) return;

    formElem.fullName.value = foundUser.fullName;
    formElem.email.value = foundUser.email;
    formElem.password.value = foundUser.password;

    submitBtn.textContent = "Update";
}


function deleteUser(id) {
    users = users.filter(user => user.id !== id);
    if (isEdit && globalId === id) {
        isEdit = false;
        globalId = null;
        formElem.reset();
    }
    localStorage.setItem("users", JSON.stringify(users));

    const totalPage = Math.ceil(users.length / PAGE_SIZE) || 1;
    if (currentPage > totalPage) {
        currentPage = totalPage;
    }

    userRender();
}

// --------------------- User Render -----------------------
function userRender(list = users, resetPage = true) {
    lastList = list;
    if (resetPage) currentPage = 1;
    renderTable();
    renderPagination();
}

function renderTable() {

    tbody.innerHTML = ""
    const start = (currentPage - 1) * PAGE_SIZE;
    const end = currentPage * PAGE_SIZE;
    const pageItems = lastList.slice(start, end);

    pageItems.forEach(user => {
        tbody.innerHTML += `
        <tr class="hover:bg-gray-50">
              <td class="p-3 border">${user.id}</td>
              <td class="p-3 border">${user.fullName}</td>
              <td class="p-3 border">${user.email}</td>
              <td class="p-3 border">${user.password}</td>
              <td class="p-3 border">
                <div class="flex gap-2 justify-center">
                  <button class="px-3 py-1 text-xs rounded bg-yellow-500 text-white hover:bg-yellow-600"
                  onclick="editUser(${user.id})">
                    Edit
                  </button>
                  <button class="px-3 py-1 text-xs rounded bg-red-600 text-white hover:bg-red-700" 
                  onclick="deleteUser(${user.id})">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
        `
    });

    totalResult.innerText = lastList.length;
}

// --------------------- Pagination Render -----------------------
function renderPagination() {
    btns.innerHTML = "";
    const totalPage = Math.ceil(lastList.length / PAGE_SIZE) || 1;

    // Prev button
    const prev = document.createElement("button")
    prev.textContent = "Prev";
    prev.disabled = currentPage === 1;
    prev.className = "w-16 h-10 mx-1 bg-gray-300 text-black rounded hover:bg-blue-400";
    prev.addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--;
            renderTable();
            renderPagination();
        }
    });
    btns.appendChild(prev);

    // Page buttons
    for (let i = 1; i <= totalPage; i++) {
        const button = document.createElement("button");
        button.textContent = i;
        button.className = `w-10 h-10 mx-1 rounded ${i === currentPage ? 'bg-blue-600 text-white' : 'bg-gray-300 text-white'}`;
        button.addEventListener("click", () => {
            currentPage = i;
            renderTable();
            renderPagination();
        });
        btns.appendChild(button);
    }

    // Next button
    const next = document.createElement("button");
    next.textContent = "Next";
    next.disabled = currentPage === totalPage;
    next.className = "w-16 h-10 mx-1 bg-gray-300 text-black rounded hover:bg-blue-400";
    next.addEventListener("click", () => {
        if (currentPage < totalPage) {
            currentPage++;
            renderTable();
            renderPagination();
        }
    });
    btns.appendChild(next);
}

