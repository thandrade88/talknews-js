import { client } from "@/lib/sanity.client";
//import mockData from './mock-articles.json' assert { type: "json" }; // Assuming your JSON is in the same directory

const sections = await client.fetch(
    `*[_type == "section" && coalesce(showInNavigation, true) == true]
      | order(coalesce(order, 0) asc){
        _id,
        "slug": slug.current,
        title,
        color
      }`
  );


  console.log(sections);

// async function createPosts() {
//   console.log(`Starting import of ${mockData.length} documents...`);

//   const transaction = client.transaction();

//   mockData.forEach(doc => {
//     // Optional: Add a check to prevent overwriting documents based on a unique field
//     // For simplicity, we'll just create or replace them here.
//     transaction.createOrReplace(doc);
//   });

//   try {
//     const result = await transaction.commit();
//     console.log('Documents imported successfully!', result.documentIds);
//   } catch (error) {
//     console.error('Import failed:', error.message);
//   }
// }

//createPosts();