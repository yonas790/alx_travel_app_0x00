// <!doctype html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Image Upload</title>
//     <style>
//       body {
//         font-family: Arial, sans-serif;
//         margin: 20px;
//       }
//       .image-group {
//         margin-bottom: 20px;
//         border: 1px solid #ccc;
//         padding: 10px;
//         border-radius: 5px;
//       }
//       .image-group input {
//         margin: 5px 0;
//       }
//       .remove-btn {
//         margin-top: 10px;
//         color: white;
//         background-color: red;
//         border: none;
//         padding: 5px 10px;
//         cursor: pointer;
//       }
//     </style>
//   </head>
//   <body>
//     <h1>Upload Images</h1>
//     <form id="uploadForm" enctype="multipart/form-data">
//       <div id="imageInputs"></div>
//       <button type="button" onclick="addImageInput()">Add Image</button>
//       <br /><br />
//       <button type="submit">Upload</button>
//     </form>

//     <script>
//       const imageInputsContainer = document.getElementById('imageInputs');

//       function addImageInput() {
//         const index = imageInputsContainer.children.length;
//         const div = document.createElement('div');
//         div.className = 'image-group';
//         div.innerHTML = `
//           <label>Select Image:</label>
//           <input type="file" name="images[]" accept="image/*" required>
//           <br>
//           <label>Alt Text:</label>
//           <input type="text" name="altTexts[]" placeholder="Enter alt text">
//           <br>
//           <label>Video URL:</label>
//           <input type="url" name="videoUrls[]" placeholder="Enter video URL">
//           <br>
//           <button type="button" class="remove-btn" onclick="removeImageInput(this)">Remove</button>
//         `;
//         imageInputsContainer.appendChild(div);
//       }

//       function removeImageInput(button) {
//         const group = button.parentElement;
//         imageInputsContainer.removeChild(group);
//       }

//       const form = document.getElementById('uploadForm');
//       form.addEventListener('submit', async (event) => {
//         event.preventDefault();

//         const formData = new FormData();
//         const groups = document.querySelectorAll('.image-group');

//         groups.forEach((group, index) => {
//           const imageInput = group.querySelector('input[type="file"]');
//           const altTextInput = group.querySelector('input[name="altTexts[]"]');
//           const videoUrlInput = group.querySelector('input[name="videoUrls[]"]');

//           if (imageInput.files[0]) {
//             formData.append(`images`, imageInput.files[0]);
//             formData.append(
//               `metadata`,
//               JSON.stringify({
//                 altText: altTextInput.value,
//                 videoUrl: videoUrlInput.value,
//               })
//             );
//           }
//         });

//         formData.append('setupId', '1');

//         try {
//           const response = await fetch('/api/images/upload', {
//             method: 'POST',
//             body: formData,
//           });

//           const result = await response.json();
//           if (response.ok) {
//             alert('Images uploaded successfully!');
//           } else {
//             alert('Error: ' + result.message);
//           }
//         } catch (error) {
//           console.error('Upload error:', error);
//           alert('An error occurred during the upload.');
//         }
//       });

//       // Add one initial input by default
//       addImageInput();
//     </script>
//   </body>
// </html>
