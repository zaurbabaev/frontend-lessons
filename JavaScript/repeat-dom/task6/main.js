"use strict"

const formElem = document.querySelector("form");
const tbody = document.querySelector("table tbody");
const submitBtn = formElem.querySelector("button");
const searchInput = document.getElementById("searchInput");
const sortBtns = document.querySelectorAll("sortBtn");


let users = [];
let id = 0;
let isEdit = false;
let globalId;
let isSorted = false;


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
            alert("Bu email artiq istifade olunub");
            return
        }

        users.push(
            {
                id: ++id,
                fullName,
                email,
                password
            }
        )
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
        userExist.fullName = fullName;
        userExist.email = email;
        userExist.password = password;
        isEdit = false;
    }

    userRender();
    formElem.reset();
})



searchInput.addEventListener("input", () => {
    const val = searchInput.value.trim().toLowerCase();
    const filteredUsers = users.filter(user =>
        user.fullName.toLowerCase().includes(val)
        ||
        user.email.toLowerCase().includes(val)
    );
    userRender(filteredUsers);
})



fullNameBtn.addEventListener("click", (e) => {
    if (!isSorted) {
        users = users.sort((a, b) => {
            return a.fullName.localeCompare(b.fullName);
        });
        isSorted = true;
    }
    else {
        users = users.sort((a, b) => {
            return b.fullName.localeCompare(a.fullName);
        })
        isSorted = false;
    }
    userRender();
})

function editUser(id) {
    isEdit = true;
    globalId = id;
    const foundUser = users.find(user => user.id === id);
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
    userRender();
}

function userRender(list = users) {
    tbody.innerHTML = ""
    list.forEach(user => {
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
    })
}