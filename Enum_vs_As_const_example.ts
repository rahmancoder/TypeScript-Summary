enum OrderStatus 
{
  Pending = "PENDING",
  Shipped = "SHIPPED",
  Delivered = "DELIVERED"
}

function updateStatus(status: OrderStatus) 
{
  console.log(`Order is now: ${status}`);
}

updateStatus(OrderStatus.Shipped);


// As const Example

const ROLES = {
  ADMIN: "admin",
  USER: "user",
  GUEST: "guest"
} as const;

// ROLES.ADMIN is now the literal type "admin", not just string.
// ROLES.ADMIN = "editor"; // Error: Read-only property