const sendToOpenAI = async (articleContent: string): Promise<string> => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `
          Przekształć poniższy artykuł do formatu HTML, uwzględniając następujące wymagania:
          1. Dodaj odpowiednie tagi HTML, takie jak <h1>, <h2>, <p>, <img> i inne, pamiętaj o zachowaniu nagłówków.
          2. W miejscach, gdzie warto dodać obrazy, użyj tagu <img> z atrybutem src.
          3. Dodaj do każdego obrazka atrybut alt, zawierający dokładne polecenie, które można wykorzystać do wygenerowania obrazu za pomocą AI.
          4. Umieść każdy obraz w tagu HTML <figure> i dodaj podpisy pod obrazami, korzystając z tagu <figcaption>. Podpisy powinny krótko opisywać treść obrazu w sposób zrozumiały dla użytkownika.

          Oto artykuł:
          ${articleContent}
          `,
        },
      ],
    }),
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.status}`);
  }

  const data = await response.json();
  const generatedHtml = data.choices[0].message.content;

  const blob = new Blob([generatedHtml], { type: "text/html" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "article.html";
  a.click();

  URL.revokeObjectURL(url);

  return generatedHtml;
};

export { sendToOpenAI };
