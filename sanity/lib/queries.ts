// Is query ko copy karke queries.ts mein paste kar dein
export const heroQuery = `*[_type == "hero"][0]{
  slides[]{
    "image": image,
    "slogan": slogan,
    "title": title,
    "description": description,
    "buttonLabel": buttonLabel,
    "buttonLink": buttonLink
  }
}`;