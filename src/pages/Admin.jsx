import React, { useState, useEffect } from 'react';

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: '', subtitle: '', price: '', originalPrice: '', category: 'PERSONAL', isBestSeller: 'false', icon: '🌿'
  });
  
  // 📸 NAYA: Ab yeh Array hai
  const [imageFiles, setImageFiles] = useState([]); 
  const [message, setMessage] = useState('');
  const [editingId, setEditingId] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:5001/api/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 📸 NAYA: Multiple files handle karna
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 5) {
      alert("Aap maximum 5 photos hi upload kar sakte hain!");
      e.target.value = ''; 
      setImageFiles([]);
      return;
    }
    setImageFiles(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('Uploading product with photos... (Please wait)');

    const submitData = new FormData();
    submitData.append('name', formData.name);
    submitData.append('subtitle', formData.subtitle);
    submitData.append('price', formData.price);
    submitData.append('originalPrice', formData.originalPrice);
    submitData.append('category', formData.category);
    submitData.append('icon', formData.icon);
    
    // 📸 NAYA: Har file ko loop karke add karna
    if (imageFiles.length > 0) {
      imageFiles.forEach((file) => {
        submitData.append('images', file); 
      });
    }

    try {
      const url = editingId 
        ? `http://localhost:5001/api/products/${editingId}` 
        : 'http://localhost:5001/api/products';
      
      const method = editingId ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method: method,
        body: submitData, 
      });

      if (response.ok) {
        setMessage(editingId ? '🎉 Product Updated!' : '🎉 Product Added with Photos!');
        setFormData({ name: '', subtitle: '', price: '', originalPrice: '', category: 'PERSONAL', icon: '🌿' });
        setImageFiles([]); 
        document.getElementById('imageInput').value = ''; 
        setEditingId(null);
        fetchProducts();
      } else {
        setMessage('❌ Error processing request.');
      }
    } catch (error) {
      setMessage('❌ Server Error.');
    }
    
    setTimeout(() => setMessage(''), 3000);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;
    try {
      const response = await fetch(`http://localhost:5001/api/products/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) fetchProducts();
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  const handleEdit = (product) => {
    setFormData({
      name: product.name, subtitle: product.subtitle || '', price: product.price,
      originalPrice: product.originalPrice || '', category: product.category, icon: product.icon || '🌿'
    });
    setEditingId(product._id);
    setImageFiles([]); 
    window.scrollTo(0, 0);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6">
      <h2 className="text-3xl font-bold text-[#00645c] mb-6 text-center">Himalaya Admin Panel</h2>
      
      {/* FORM SECTION */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 mb-10">
        <h3 className="text-xl font-semibold mb-4">{editingId ? '✏️ Edit Product' : '➕ Add New Product'}</h3>
        
        {message && (
          <div className={`p-3 mb-4 text-center rounded-md font-medium ${message.includes('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* ... Baaki normal inputs (Name, Price etc) ... */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Product Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required className="mt-1 w-full p-2 border rounded-md" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Subtitle</label>
              <input type="text" name="subtitle" value={formData.subtitle} onChange={handleChange} className="mt-1 w-full p-2 border rounded-md" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Current Price</label>
              <input type="text" name="price" value={formData.price} onChange={handleChange} required className="mt-1 w-full p-2 border rounded-md" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Original Price</label>
              <input type="text" name="originalPrice" value={formData.originalPrice} onChange={handleChange} className="mt-1 w-full p-2 border rounded-md" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Category</label>
              <select name="category" value={formData.category} onChange={handleChange} className="mt-1 w-full p-2 border rounded-md">
                <option value="PERSONAL">Personal Care</option>
                <option value="BABY">Baby Care</option>
                <option value="PHARMA">Pharma / Wellness</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Sub-Category (Filter)</label>
              <input 
                type="text" 
                name="subCategory" 
                value={formData.subCategory} 
                onChange={handleChange} 
                placeholder="e.g. Cough & Cold" 
                className="mt-1 w-full p-2 border rounded-md" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Emoji Icon (Fallback)</label>
              <input type="text" name="icon" value={formData.icon} onChange={handleChange} className="mt-1 w-full p-2 border rounded-md" />
            </div>
          </div>

          {/* 📸 NAYA: Multiple Image Input */}
          <div className="mt-4 p-4 border border-dashed border-gray-300 rounded-md bg-gray-50">
            <label className="block text-sm font-medium text-gray-700 mb-2">📸 Upload Product Images (Max 5)</label>
            <input 
              type="file" 
              multiple 
              id="imageInput"
              accept="image/*" 
              onChange={handleFileChange} 
              className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[#00645c] file:text-white hover:file:bg-[#004d47]"
            />
            {imageFiles.length > 0 && (
              <p className="text-sm font-medium text-green-700 mt-2">
                ✅ {imageFiles.length} photo(s) selected
              </p>
            )}
          </div>

          <div className="flex gap-4 mt-6">
             <button type="submit" className="flex-1 bg-[#00645c] text-white py-2 rounded-md font-bold hover:bg-[#004d47]">
              {editingId ? 'Update Product' : 'Add Product'}
            </button>
          </div>
        </form>
      </div>

      {/* PRODUCTS LIST SECTION */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
        <h3 className="text-xl font-semibold mb-4">📦 Manage Live Products</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b">
                <th className="p-3 text-sm text-gray-600">Image</th>
                <th className="p-3 text-sm text-gray-600">Name</th>
                <th className="p-3 text-sm text-gray-600">Price</th>
                <th className="p-3 text-sm text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product._id} className="border-b hover:bg-gray-50">
                  <td className="p-3">
                    {/* 📸 NAYA: Table image logic */}
                    {product.images && product.images.length > 0 ? (
                       <img src={product.images[0]} alt={product.name} className="w-10 h-10 object-cover rounded-full border border-gray-200" />
                    ) : (
                       <span className="text-2xl">{product.icon}</span>
                    )}
                  </td>
                  <td className="p-3 font-medium text-gray-800">{product.name}</td>
                  <td className="p-3 text-green-700 font-bold">{product.price}</td>
                  <td className="p-3 flex gap-2">
                    <button onClick={() => handleEdit(product)} className="px-3 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 text-sm font-medium">Edit</button>
                    <button onClick={() => handleDelete(product._id)} className="px-3 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200 text-sm font-medium">Delete</button>
                  </td>
                </tr>
              ))}
              {products.length === 0 && (
                <tr><td colSpan="4" className="text-center p-4 text-gray-500">No products found.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;