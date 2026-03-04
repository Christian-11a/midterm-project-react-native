export const validateForm = (name: string, email: string, contact: string, bio: string) => {
  if (!name.trim() || !email.trim() || !contact.trim() || !bio.trim()) return "All fields are required.";
  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) return "Enter a valid email.";
  if (!/^09\d{9}$/.test(contact)) return "Contact must be 11 digits starting with 09.";
  if (bio.trim().length < 20) return "Bio must be at least 20 characters.";
  return null;
};