import { v4 as uuid } from "uuid";

export const AddressDB = {
  data: [
    {
      id: uuid(),
      person: "abc@gmail.com",
      type: "home",
      addressLine1: "123/45 2nd floor",
      addressLine2: "Rajouri Garden, New Delhi",
      city: "New Delhi",
      state: "Delhi",
      pincode: "110015",
      isDefault: true,
    },
    {
      id: uuid(),
      person: "adarshbalika@gmail.com",
      type: "home",
      addressLine1: "123/45 2nd floor",
      addressLine2: "Rajouri Garden, New Delhi",
      city: "New Delhi",
      state: "Delhi",
      pincode: "110015",
      isDefault: true,
    },
  ],
};

export const GetUserAddress = (email) => {
  return AddressDB.data.filter((address) => address.person === email);
};
