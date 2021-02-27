## This is interior design project.

### Please note following points 

- Simply using raw .glb files was degrading the performance in chrome. Hence used a library to compress the .glb file. Please follow the provided link to explore (https://www.npmjs.com/package/gltf-pipeline)
 
 Followed the command to compress the file
 gltf-pipeline -i input.glb -o output.glb --draco.compressionLevel=10


- To fetch the materials and interior geometry of the .glb file in form of a React component I have used a library. Please follow the provided link to explore (https://github.com/pmndrs/gltfjsx)