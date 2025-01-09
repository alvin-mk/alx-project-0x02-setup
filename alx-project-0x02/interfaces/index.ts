// Interface for a Post
export interface PostProps {
  id: number;
  title: string;
  content: string;
  userId: number;
}

// Interface for a User
export interface UserProps {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    city: string;
    zipcode: string;
  };
}

// Interface for handling general form data (if needed for form-based components)
export interface FormProps {
  title: string;
  content: string;
}

// Interface for the Button component props
export interface ButtonProps {
  label: string;
  onClick: () => void;
  styleClass?: string;
}

// Add more interfaces as needed for other components or data structures
