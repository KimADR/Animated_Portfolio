/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 mugModel.glb 
Author: khanhnguyen1189 (https://sketchfab.com/khanhnguyen1189)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/coffee-cup-d3c5d506665a41ce863daa00130fbfcd
Title: Coffee Cup
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function MugModel(props) {
  const { nodes, materials } = useGLTF('/mugModel.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cylinder001_CFC_0.geometry} material={materials.material} position={[-0.189, 0, -0.126]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Box001__0.geometry} material={materials.RootNode} position={[2.964, 13.777, -1.412]} rotation={[-1.741, 0.707, -0.4]} scale={0.374} />
      <mesh geometry={nodes.Box003__0.geometry} material={materials.RootNode} position={[0.808, 14.284, 1.868]} rotation={[-2.257, -0.33, -0.53]} scale={0.374} />
      <mesh geometry={nodes.Box004__0.geometry} material={materials.RootNode} position={[-1.748, 13.975, -2.278]} rotation={[-2.139, 0.52, -1.568]} scale={0.374} />
      <mesh geometry={nodes.Box005__0.geometry} material={materials.RootNode} position={[-4.591, 13.975, 2.93]} rotation={[-1.106, 0.739, -2.681]} scale={0.374} />
      <mesh geometry={nodes.Box006__0.geometry} material={materials.RootNode} position={[-3.676, 17.882, -5.334]} rotation={[-0.366, 0.665, 0.233]} scale={[1, 1, 0.401]} />
    </group>
  )
}

useGLTF.preload('/mugModel.glb')
