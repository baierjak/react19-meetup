"use server";

export const updateName = async (previousState: any, formData: any) => {
  const name = formData.get("name");

  // mocked update request
  await new Promise((r) => setTimeout(r, 2000));

  if (name) {
    return null;
  }
  return { name: "Name is required" };
};

export async function formSubmit(name: string) {
  if (!name) {
    return { error: "Name is required" };
  }

  // Todo: Update name via API
}

export async function deliverMessage(message: any) {
  await new Promise((res) => setTimeout(res, 1000));
  if (Math.random() < 0.3) {
    return { message };
  }
  return { error: "Message failed :(" };
}
