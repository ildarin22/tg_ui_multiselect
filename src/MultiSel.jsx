/* 
✨ CoonDev • http://dev.coonlink.fun/ 

 ▄█▄    ████▄ ████▄    ▄   ██▄   ▄███▄      ▄  
 █▀ ▀▄  █   █ █   █     █  █  █  █▀   ▀      █ 
 █   ▀  █   █ █   █ ██   █ █   █ ██▄▄   █     █
 █▄  ▄▀ ▀████ ▀████ █ █  █ █  █  █▄   ▄▀ █    █
 ▀███▀              █  █ █ ███▀  ▀███▀    █  █ 
                    █   ██                 █▐  
                                           ▐   
*/
import { useState, useCallback, useMemo } from "react";
import { Modal, Input, Multiselect } from "@telegram-apps/telegram-ui";
import { v4 as uuidv4 } from "uuid";

function DialogTitle({ children }) {
  return <h2 className="dialog-title">{children}</h2>;
}

const OPTIONS = [
  { key: uuidv4(), value: "option1", label: "Option 1" },
  { key: uuidv4(), value: "option2", label: "Option 2" },
  { key: uuidv4(), value: "option3", label: "Option 3" },
];

export default function MultiSel() {
  const [selectedValues, setSelectedValues] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", price: "", description: "" });

  const handleFormChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const validateForm = useCallback(() => {
    if (!formData.name.trim()) {
      alert("Name is required");
      return false;
    }
    const price = parseFloat(formData.price);
    if (isNaN(price) || price <= 0) {
      alert("Price must be a positive number");
      return false;
    }
    return true;
  }, [formData]);

  const handleSubmit = useCallback(() => {
    if (!validateForm()) return;

    console.log("Form submitted:", {
      selectedValues,
      ...formData,
    });

    setIsModalOpen(false);
  }, [formData, selectedValues, validateForm]);

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>

      <Modal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        modal
      >
        <DialogTitle>Select Options and Fill Form</DialogTitle>
        <p>Please select one or more options and fill in the fields below.</p>

        <Multiselect
          options={OPTIONS}
          value={selectedValues}
          onChange={setSelectedValues}
          placeholder="Select"
        />

        <Input
          header="Name"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleFormChange}
        />

        <Input
          header="Price"
          name="price"
          placeholder="Enter price"
          value={formData.price}
          onChange={handleFormChange}
        />

        <Input
          header="Description"
          name="description"
          placeholder="Enter description"
          value={formData.description}
          onChange={handleFormChange}
        />

        <div className="modal-actions">
          <button onClick={handleSubmit}>Submit</button>
          <button onClick={() => setIsModalOpen(false)}>Close</button>
        </div>
      </Modal>
    </div>
  );
}