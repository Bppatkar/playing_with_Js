async function handleSubmit(formData) {
  try {
    const response = await fetch('/api/item', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (!response.ok) throw new Error('error in data sending');
    const result = await response.json();
    console.log('success:', result);
  } catch (error) {
    console.error(error);
  }
}
handleSubmit();
