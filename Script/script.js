var productName = document.getElementById('name')
var productPrice = document.getElementById('price')
var productCategory = document.getElementById('cat')
var productDescription = document.getElementById('desc')
var addProduct = document.getElementById('addBtn')
var updateBtn =document.getElementById('updateBtn')
var searchInput = document.getElementById('search')
var productsContainer =[]

if(localStorage.getItem('products') != null){
    productsContainer=JSON.parse(localStorage.getItem('products'))
    displayData()
}

function admin() {
    var x = document.getElementById("email");
    if (x === "admin@gmail.com") {
        document.getElementsByClassName("container").style.display = "block";
    } else {
        document.getElementsByClassName("container").style.display = "none";
    }
}
  

addProduct.addEventListener('click', function(){
    var product={
        name : productName.value,
        price : productPrice.value,
        category : productCategory.value,
        description : productDescription.value
    }
    productsContainer.push(product);
    localStorage.setItem('products' ,JSON.stringify(productsContainer))
    
    
    displayData()
    clearData()
    
})



function displayData(){
    var hamada =``
    for(var i=0; i<productsContainer.length; i++){
        hamada+=`<tr>
        <th scope="row"> <p id='nameProduct'> ${i} </p><input type="text" class="form-control d-none " id="nameUpdate"></th>
        <th scope="row"> <p id='nameProduct'> ${productsContainer[i].name} </p><input type="text" class="form-control d-none " id="nameUpdate"></th>
        <td> <p id='priceProduct'>${productsContainer[i].price}</p><input type="text" class="form-control d-none " id="priceUpdate"></td>
        <td> <p id='catProduct'>${productsContainer[i].category}</p><input type="text" class="form-control d-none " id="catUpdate"></td>
        <td> <p id='descProduct'>${productsContainer[i].description}</p><input type="text" class="form-control d-none " id="descUpdate"></td>
        <td><button class="btn btn-outline-danger"onclick ="deleteData(${i})" >Delete</button></td> 
        <td><button class="btn btn-outline-warning" id='updatebttn' onclick="updateData(${i})" >Update</button>
        <button class="btn btn-outline-success px-3 show" id='savebtn'>Save</button></td>
        </tr>`
    }
    
    document.getElementById('info').innerHTML=hamada
}


function clearData(){
    productName.value =``
    productPrice.value =``
    productCategory.value =``
    productDescription.value =``
}


function deleteData (indexed){
    productsContainer.splice(indexed ,1)
    localStorage.setItem('products' ,JSON.stringify(productsContainer))
    displayData()
}

var x;
function updateData(indexed){
x=indexed
productName.value=productsContainer[indexed].name
productPrice.value=productsContainer[indexed].price
productCategory.value=productsContainer[indexed].category
productDescription.value=productsContainer[indexed].description
updateBtn.classList.toggle('show')
addProduct.classList.toggle('show')

}

updateBtn.addEventListener('click' , function(){
    productsContainer[x].name = productName.value
    productsContainer[x].price = productPrice.value
    productsContainer[x].category = productCategory.value
    productsContainer[x].description = productDescription.value
    localStorage.setItem('products' ,JSON.stringify(productsContainer))
    updateBtn.classList.toggle('show')
    addProduct.classList.toggle('show')
    displayData()
    clearData()
    
})



searchInput.addEventListener('input', function(){
    // console.log('hello');
    var hamada =``
    var searchValue =searchInput.value
    for(var i=0;i<productsContainer.length;i++){
        if(productsContainer[i].name[0].toLowerCase().includes(searchValue.toLowerCase())==true){
            hamada+=`<tr>
            <th scope="row"> <p id='nameProduct'> ${i} </p><input type="text" class="form-control d-none " id="nameUpdate"></th>
            <th scope="row"> <p id='nameProduct'> ${productsContainer[i].name} </p><input type="text" class="form-control d-none " id="nameUpdate"></th>
            <td> <p id='priceProduct'>${productsContainer[i].price}</p><input type="text" class="form-control d-none " id="priceUpdate"></td>
            <td> <p id='catProduct'>${productsContainer[i].category}</p><input type="text" class="form-control d-none " id="catUpdate"></td>
            <td> <p id='descProduct'>${productsContainer[i].description}</p><input type="text" class="form-control d-none " id="descUpdate"></td>
            <td><button class="btn btn-outline-danger"onclick ="deleteData(${i})" >Delete</button></td> 
            <td><button class="btn btn-outline-warning" id='updatebttn' onclick="updateData(${i})" >Update</button>
            <button class="btn btn-outline-success px-3 show" id='savebtn'>Save</button></td>
            </tr>` 
        }
        document.getElementById('info').innerHTML=hamada
    }

})

