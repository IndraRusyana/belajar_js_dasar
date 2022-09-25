// DOM manipulasi node

// document.createElement()
// document.createTextNode()
// appendChild()
// buat element baru

// const pbaru = document.createElement('p');
// const textbuatpbaru = document.createTextNode('paragaraf pake js')
// // simpan tulisan kedalam pbaru
// pbaru.appendChild(textbuatpbaru);
// // simpan pbaru di akhir section A
// const sectionA = document.getElementById('a');
// sectionA.appendChild(pbaru);


// //  node.insertBefore()
// const libaru = document.createElement('li');
// const textlibaru =  document.createTextNode('pake js');
// libaru.appendChild(textlibaru);

// const ul = document.querySelector('section#b ul');
// const li2 = ul.querySelector('li:nth-child(2)');

// ul.insertBefore(libaru, li2);


// // parentNode.removeChild();
// const sectionB = document.getElementById('a');
// const link = document.getElementsByTagName('a')[0];

// sectionB.removeChild(link);


// parentNode.replaceChild()

const sectionC = document.getElementById('b');
const p4 = sectionC.querySelector('p');

const h2baru = document.createElement('h2');
const texth2baru = document.createTextNode('pake js juga');

h2baru.appendChild(texth2baru);

sectionC.replaceChild(h2baru, p4);

h2baru.style.background = 'blue';
libaru.style.background = 'blue';
pbaru.style.background = 'blue';













