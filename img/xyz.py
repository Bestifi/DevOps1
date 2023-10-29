from rembg import remove
from PIL import Image
input_path = 'PhantomGX2.webp'
output_path = 'PhantomGX2.png'
input = Image.open(input_path)
output = remove(input)
output.save(output_path)