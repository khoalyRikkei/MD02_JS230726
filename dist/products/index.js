"use strict";
const productElement = document.querySelector("#products-management .table tbody");
const modalElement = document.querySelector("#exampleModal");
function renderProduct(products) {
    const content = products
        .map((product, index) => `
        <tr>
            <th scope="row">${index + 1}</th>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>${product.quantity}</td>
            <td>
                <button class="btn btn-primary me-2" data-bs-toggle="modal"
                data-bs-target="#exampleModal" onclick="handleEdit(${product.id})">Edit</button
                ><button class="btn btn-danger"  onclick="handleDelete(${product.id})">Delete</button>
            </td>
        </tr>`)
        .join("");
    productElement.innerHTML = content;
}
renderProduct(store.showAllProduct());
function handleEdit(id) {
    renderModal(id);
}
function handleDelete(id) {
    store.deleteProduct(id);
    renderProduct(store.showAllProduct());
}
function renderModal(id) {
    console.log(id);
    const product = store.showAllProduct().find((product) => product.id === id);
    if (product) {
        const content = `
        <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              Sửa sản phẩm
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form>
            <div class="mb-3">
                <label for="id" class="form-label">ID</label>
                <input
                  disabled
                  type="text"
                  class="form-control"
                  id="id"
                  value="${id}"
                />
              </div>
              <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  aria-describedby="emailHelp"
                  value="${product.name}"
                />
              </div>
              <div class="mb-3">
                <label for="price" class="form-label"
                  >Price</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="price"
                  value="${product.price}"
                />
              </div>
              <div class="mb-3">
                <label for="quantity" class="form-label">Số lượng</label>
                <input type="text" class="form-control" id="quantity"  value="${product.quantity}"/>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
      `;
        modalElement.innerHTML = content;
    }
}
