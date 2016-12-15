import { GET, POST, PUT } from '../util'

export async function getCustomer(config, id) {
  return await GET(config, `Customers/${id}`);
}

export async function createCustomer(config, customer) {
  return await POST(config, 'Customers', customer);
}

export async function updateCustomer(config, id, updates) {
  return await PUT(config, `Customers/${id}`, updates);
}
