import {GET} from '../util'

export async function getCustomer(config, id) {
  const response = await GET(config, `Customers/${id}`);

  return response
}

export async function createCustomer(config, customer) {
  console.log(`Creating customer (${JSON.stringify(customer)}) with config: ${JSON.stringify(config)}...`);
}

export async function deleteCustomer(config, id) {
  console.log(`Deleting customer ${id} with config: ${JSON.stringify(config)}...`);
}
