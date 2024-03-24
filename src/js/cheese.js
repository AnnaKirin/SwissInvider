import cheeseImage from "../images/cheese.png"
import { getRandomInt, getRandomFloat } from "./random";

export class Cheese {
    constructor(canvas) {
        this.canvas = canvas
        this.avatar = this.createCheeseAvatar();
        this.x = getRandomInt(canvas.clientWidth);
        this.y = this.canvas.clientHeight;
        this.direction = "GROW";
        this.velocityX = 0.1;
        this.velocityY = 0.1;
        this.cheeseSize = 50;
        this.maxCheeseSpeed = 0.5;
        this.state = "ACTIVE";
        this.w = this.cheeseSize;
        this.h = this.cheeseSize;
        this.prevPlayerX = 0;
        this.prevPlayerY = 0;
        this.playerNotHit = false;
    }

    createCheeseAvatar() {
        let newImage = new Image();
        newImage.src = cheeseImage;
        return newImage;
    }
    draw(context) {
        context.drawImage(this.avatar, this.x, this.y, this.cheeseSize, this.cheeseSize);
    }
    update(playerX, playerY) {

        if (this.direction == "GROW") {
            this.cheeseSize += 0.3;
            if (this.cheeseSize > 60) {
                this.direction = "SHRINK";
            }
        } else {
            this.cheeseSize -= 0.3;
            if (this.cheeseSize < 50) {
                this.direction = "GROW";
            }
        }

        const speed = 10; // Speed at which the follower moves

        if (this.playerNotHit) {

            const distance = this.calculateDistance(this.prevPlayerX, this.prevPlayerY, this.x, this.y)
            let followerPos = this.follow(this.prevPlayerX, this.prevPlayerY, this.x, this.y, speed, distance);
            this.x = followerPos.x;
            this.y = followerPos.y;
        } else {
            const distance = this.calculateDistance(playerX, playerY, this.x, this.y)
            if (distance > 100 && (this.y - playerY) > 100) {
                let followerPos = this.follow(playerX, playerY, this.x, this.y, speed, distance);
                this.prevPlayerX = playerX;
                this.prevPlayerY = playerY;
                this.x = followerPos.x;
                this.y = followerPos.y;
            } else {
                this.playerNotHit = true;
                if (this.x > this.prevPlayerX) {
                    this.prevPlayerX -= 1000
                    this.prevPlayerY -= 1000
                } else {
                    this.prevPlayerX += 1000
                    this.prevPlayerY -= 1000
                }
            }
        }
    }

    follow(targetX, targetY, followerX, followerY, speed, distance) {


        const stepX = ((targetX - followerX) / distance) * speed;
        const stepY = ((targetY - followerY) / distance) * speed;

        // Update the follower's position
        followerX += stepX;
        followerY += stepY;

        // Return the updated position
        return { x: followerX, y: followerY };
    }

    calculateDistance(targetX, targetY, followerX, followerY) {
        const deltaX = targetX - followerX;
        const deltaY = targetY - followerY;
        return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    }

    onUnderScreen() {
        if ((this.y < 0)) {
            return false;
        } else {
            return true
        }
    }
}
