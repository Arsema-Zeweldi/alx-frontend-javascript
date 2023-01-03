export default function createInt8TypedArray(length, position, value) {
  const array = new ArrayBuffer(length);
  const data = new DataView(array);

  try {
    data.setInt8(position, value);
  } catch (err) {
    throw Error('Position outside range');
  }
  return data;
}
