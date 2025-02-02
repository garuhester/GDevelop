// Automatically generated by GDevelop.js/scripts/generate-types.js
declare class gdEffectsContainer {
  constructor(): void;
  hasEffectNamed(name: string): boolean;
  getEffect(name: string): gdEffect;
  getEffectAt(index: number): gdEffect;
  getEffectPosition(name: string): number;
  getEffectsCount(): number;
  insertNewEffect(name: string, position: number): gdEffect;
  insertEffect(theEffect: gdEffect, position: number): void;
  removeEffect(name: string): void;
  swapEffects(firstEffectIndex: number, secondEffectIndex: number): void;
  moveEffect(oldIndex: number, newIndex: number): void;
  serializeTo(element: gdSerializerElement): void;
  unserializeFrom(element: gdSerializerElement): void;
  delete(): void;
  ptr: number;
};