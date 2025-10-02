import Phaser from 'phaser'
import { Enemy } from './Enemy'

export class Boss extends Enemy {
	constructor(scene: Phaser.Scene, x: number, y: number, hp: number, speed: number) {
		super(scene, x, y, hp, speed, 'boss', 5)
	}
} 