 let flowersGenerated = [];
        let hasFloatingPetal = false;
        let flowerIdCounter = 0;
        
        // Typewriter effect
        function typeWriter(element, text, speed = 100) {
            let i = 0;
            element.innerHTML = '';
            
            function type() {
                if (i < text.length) {
                    if (text.charAt(i) === '<') {
                        // Handle HTML tags
                        let tagEnd = text.indexOf('>', i);
                        if (tagEnd !== -1) {
                            element.innerHTML += text.substring(i, tagEnd + 1);
                            i = tagEnd + 1;
                        } else {
                            element.innerHTML += text.charAt(i);
                            i++;
                        }
                    } else {
                        element.innerHTML += text.charAt(i);
                        i++;
                    }
                    setTimeout(type, speed);
                }
            }
            type();
        }
        
        // Initialize typewriter on page load
        window.addEventListener('load', () => {
            const typewriterElement = document.getElementById('typewriter');
            const message = "En esta primavera<br>Aunque no pueda darte flores de verdad, no quiero que te falten.<br>Por eso te regalo estas flores amarillas:<br><br><span style='font-size: 18px; color: #B8860B; font-style: italic;'>Con amor Feli</span>";
            
            setTimeout(() => {
                typeWriter(typewriterElement, message, 90);
            }, 1200);
        });
        
        // Flower color schemes
        const flowerColors = [
            { 
                center: '#FFD700', 
                middle: '#FFA500', 
                outer: '#FF8C00',
                stem: '#228B22',
                leaf: '#32CD32',
                type: 'yellow' 
            },
            { 
                center: '#DE9F1B', 
                middle: '#DECE1B', 
                outer: '#DE841B',
                stem: '#228B22',
                leaf: '#90EE90',
                type: 'orange' 
            },
            { 
                center: '#DE6F1B', 
                middle: '#DE8F1B', 
                outer: '#DE4C1B',
                stem: '#228B22',
                leaf: '#98FB98',
                type: 'pink' 
            },
            { 
                center: '#D8A60F', 
                middle: '#B68C0D', 
                outer: '#E0AC10',
                stem: '#228B22',
                leaf: '#ADFF2F',
                type: 'light-yellow' 
            }
        ];
        
        function createButtonFlower() {
            const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.setAttribute('width', '60');
            svg.setAttribute('height', '60');
            svg.setAttribute('viewBox', '0 0 60 60');
            svg.classList.add('button-flower');
            
            const colorScheme = flowerColors[0]; // Yellow for button flower
            
            // Create gradients
            const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
            const gradientId = `buttonFlowerGrad${Date.now()}`;
            
            const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'radialGradient');
            gradient.setAttribute('id', gradientId);
            gradient.setAttribute('cx', '50%');
            gradient.setAttribute('cy', '30%');
            
            const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
            stop1.setAttribute('offset', '0%');
            stop1.setAttribute('stop-color', colorScheme.center);
            
            const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
            stop2.setAttribute('offset', '70%');
            stop2.setAttribute('stop-color', colorScheme.middle);
            
            const stop3 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
            stop3.setAttribute('offset', '100%');
            stop3.setAttribute('stop-color', colorScheme.outer);
            
            gradient.appendChild(stop1);
            gradient.appendChild(stop2);
            gradient.appendChild(stop3);
            defs.appendChild(gradient);
            svg.appendChild(defs);
            
            // Create petals
            for (let i = 0; i < 8; i++) {
                const petal = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
                petal.setAttribute('cx', '30');
                petal.setAttribute('cy', '15');
                petal.setAttribute('rx', '6');
                petal.setAttribute('ry', '12');
                petal.setAttribute('fill', `url(#${gradientId})`);
                petal.setAttribute('transform', `rotate(${i * 45} 30 30)`);
                svg.appendChild(petal);
            }
            
            // Create center
            const center = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            center.setAttribute('cx', '30');
            center.setAttribute('cy', '30');
            center.setAttribute('r', '6');
            center.setAttribute('fill', '#8B4513');
            svg.appendChild(center);
            
            return svg;
        }
        
        function createFlowerSVG(colorScheme) {
            flowerIdCounter++;
            const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.setAttribute('width', '90');
            svg.setAttribute('height', '140');
            svg.setAttribute('viewBox', '0 0 90 140');
            
            // Create gradients
            const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
            
            // Petal gradient
            const petalGradId = `petalGrad${flowerIdCounter}`;
            const petalGradient = document.createElementNS('http://www.w3.org/2000/svg', 'radialGradient');
            petalGradient.setAttribute('id', petalGradId);
            petalGradient.setAttribute('cx', '50%');
            petalGradient.setAttribute('cy', '20%');
            
            const petalStop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
            petalStop1.setAttribute('offset', '0%');
            petalStop1.setAttribute('stop-color', colorScheme.center);
            
            const petalStop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
            petalStop2.setAttribute('offset', '60%');
            petalStop2.setAttribute('stop-color', colorScheme.middle);
            
            const petalStop3 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
            petalStop3.setAttribute('offset', '100%');
            petalStop3.setAttribute('stop-color', colorScheme.outer);
            
            petalGradient.appendChild(petalStop1);
            petalGradient.appendChild(petalStop2);
            petalGradient.appendChild(petalStop3);
            
            // Stem gradient
            const stemGradId = `stemGrad${flowerIdCounter}`;
            const stemGradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
            stemGradient.setAttribute('id', stemGradId);
            stemGradient.setAttribute('x1', '0%');
            stemGradient.setAttribute('y1', '0%');
            stemGradient.setAttribute('x2', '100%');
            stemGradient.setAttribute('y2', '0%');
            
            const stemStop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
            stemStop1.setAttribute('offset', '0%');
            stemStop1.setAttribute('stop-color', '#006400');
            
            const stemStop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
            stemStop2.setAttribute('offset', '50%');
            stemStop2.setAttribute('stop-color', colorScheme.stem);
            
            const stemStop3 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
            stemStop3.setAttribute('offset', '100%');
            stemStop3.setAttribute('stop-color', '#228B22');
            
            stemGradient.appendChild(stemStop1);
            stemGradient.appendChild(stemStop2);
            stemGradient.appendChild(stemStop3);
            
            // Leaf gradient
            const leafGradId = `leafGrad${flowerIdCounter}`;
            const leafGradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
            leafGradient.setAttribute('id', leafGradId);
            leafGradient.setAttribute('x1', '0%');
            leafGradient.setAttribute('y1', '0%');
            leafGradient.setAttribute('x2', '100%');
            leafGradient.setAttribute('y2', '100%');
            
            const leafStop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
            leafStop1.setAttribute('offset', '0%');
            leafStop1.setAttribute('stop-color', colorScheme.leaf);
            
            const leafStop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
            leafStop2.setAttribute('offset', '100%');
            leafStop2.setAttribute('stop-color', '#228B22');
            
            leafGradient.appendChild(leafStop1);
            leafGradient.appendChild(leafStop2);
            
            defs.appendChild(petalGradient);
            defs.appendChild(stemGradient);
            defs.appendChild(leafGradient);
            svg.appendChild(defs);
            
            // Create stem
            const stem = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            stem.setAttribute('x', '42');
            stem.setAttribute('y', '40');
            stem.setAttribute('width', '6');
            stem.setAttribute('height', '100');
            stem.setAttribute('rx', '3');
            stem.setAttribute('fill', `url(#${stemGradId})`);
            svg.appendChild(stem);
            
            // Create leaves
            const leaf1 = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
            leaf1.setAttribute('cx', '28');
            leaf1.setAttribute('cy', '80');
            leaf1.setAttribute('rx', '10');
            leaf1.setAttribute('ry', '18');
            leaf1.setAttribute('fill', `url(#${leafGradId})`);
            leaf1.setAttribute('transform', 'rotate(-35 28 80)');
            svg.appendChild(leaf1);
            
            const leaf2 = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
            leaf2.setAttribute('cx', '62');
            leaf2.setAttribute('cy', '90');
            leaf2.setAttribute('rx', '10');
            leaf2.setAttribute('ry', '18');
            leaf2.setAttribute('fill', `url(#${leafGradId})`);
            leaf2.setAttribute('transform', 'rotate(35 62 90)');
            svg.appendChild(leaf2);
            
            const leaf3 = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
            leaf3.setAttribute('cx', '35');
            leaf3.setAttribute('cy', '110');
            leaf3.setAttribute('rx', '8');
            leaf3.setAttribute('ry', '15');
            leaf3.setAttribute('fill', `url(#${leafGradId})`);
            leaf3.setAttribute('transform', 'rotate(-20 35 110)');
            svg.appendChild(leaf3);
            
            // Create petals (7 petals for natural look)
            for (let i = 0; i < 7; i++) {
                const petal = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
                petal.setAttribute('cx', '45');
                petal.setAttribute('cy', '22');
                petal.setAttribute('rx', '9');
                petal.setAttribute('ry', '20');
                petal.setAttribute('fill', `url(#${petalGradId})`);
                petal.setAttribute('transform', `rotate(${i * 51.4} 45 40)`);
                svg.appendChild(petal);
            }
            
            // Create flower center
            const center = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            center.setAttribute('cx', '45');
            center.setAttribute('cy', '40');
            center.setAttribute('r', '10');
            center.setAttribute('fill', '#8B4513');
            svg.appendChild(center);
            
            // Add texture to center
            for (let i = 0; i < 15; i++) {
                const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                const angle = (i * 24) * (Math.PI / 180);
                const radius = 2 + Math.random() * 4;
                const dotX = 45 + Math.cos(angle) * radius;
                const dotY = 40 + Math.sin(angle) * radius;
                
                dot.setAttribute('cx', dotX);
                dot.setAttribute('cy', dotY);
                dot.setAttribute('r', '1');
                dot.setAttribute('fill', '#D2691E');
                dot.setAttribute('opacity', '0.8');
                svg.appendChild(dot);
            }
            
            return svg;
        }
        
        function createFlower(x, y) {
            const flower = document.createElement('div');
            flower.className = 'flower';
            flower.style.left = x + 'px';
            flower.style.bottom = y + 'px';
            
            const colorScheme = flowerColors[Math.floor(Math.random() * flowerColors.length)];
            const svg = createFlowerSVG(colorScheme);
            
            flower.appendChild(svg);
            return flower;
        }
        
        function generateFlowers() {
            const container = document.getElementById('flowersContainer');
            const numFlowers = 10 + Math.floor(Math.random() * 6);
            
            for (let i = 0; i < numFlowers; i++) {
                setTimeout(() => {
                    const x = Math.random() * (window.innerWidth - 120);
                    const y = Math.random() * 250 + 80;
                    
                    const flower = createFlower(x, y);
                    container.appendChild(flower);
                    flowersGenerated.push(flower);
                    
                    // Show dedication after last flower
                    if (i === numFlowers - 1) {
                        setTimeout(() => {
                            document.getElementById('dedication').classList.add('show');
                        }, 1500);
                    }
                }, i * 400);
            }
        }
        
        function createFloatingPetal() {
            if (hasFloatingPetal) return;
            
            const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.setAttribute('width', '20');
            svg.setAttribute('height', '30');
            svg.setAttribute('viewBox', '0 0 20 30');
            svg.classList.add('floating-petal');
            
            const petal = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
            petal.setAttribute('cx', '10');
            petal.setAttribute('cy', '15');
            petal.setAttribute('rx', '8');
            petal.setAttribute('ry', '12');
            petal.setAttribute('fill', 'url(#floatingPetalGrad)');
            
            const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
            const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'radialGradient');
            gradient.setAttribute('id', 'floatingPetalGrad');
            
            const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
            stop1.setAttribute('offset', '0%');
            stop1.setAttribute('stop-color', '#FFD700');
            
            const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
            stop2.setAttribute('offset', '100%');
            stop2.setAttribute('stop-color', '#FFA500');
            
            gradient.appendChild(stop1);
            gradient.appendChild(stop2);
            defs.appendChild(gradient);
            svg.appendChild(defs);
            svg.appendChild(petal);
            
            svg.style.top = Math.random() * 300 + 150 + 'px';
            svg.style.left = Math.random() * (window.innerWidth - 100) + 'px';
            
            document.body.appendChild(svg);
            hasFloatingPetal = true;
        }
        
        // Pull instruction handler
        let startY = 0;
        let currentY = 0;
        let isDragging = false;
        let hasTriggered = false;
        
        const pullInstruction = document.getElementById('pullInstruction');
        
        // Mouse events
        pullInstruction.addEventListener('mousedown', function(e) {
            if (hasTriggered) return;
            isDragging = true;
            startY = e.clientY;
            this.style.cursor = 'grabbing';
        });
        
        document.addEventListener('mousemove', function(e) {
            if (!isDragging || hasTriggered) return;
            
            currentY = e.clientY;
            const deltaY = startY - currentY; // Positive when moving up
            
            if (deltaY > 0) {
                pullInstruction.style.transform = `translateY(-${Math.min(deltaY, 100)}px)`;
            }
            
            if (deltaY > 80) {
                triggerFlowers();
            }
        });
        
        document.addEventListener('mouseup', function() {
            if (!isDragging || hasTriggered) return;
            isDragging = false;
            pullInstruction.style.cursor = 'grab';
            
            // Reset position if not triggered
            if (!hasTriggered) {
                pullInstruction.style.transform = 'translateY(0)';
            }
        });
        
        // Touch events for mobile
        pullInstruction.addEventListener('touchstart', function(e) {
            if (hasTriggered) return;
            isDragging = true;
            startY = e.touches[0].clientY;
        });
        
        document.addEventListener('touchmove', function(e) {
            if (!isDragging || hasTriggered) return;
            e.preventDefault();
            
            currentY = e.touches[0].clientY;
            const deltaY = startY - currentY;
            
            if (deltaY > 0) {
                pullInstruction.style.transform = `translateY(-${Math.min(deltaY, 100)}px)`;
            }
            
            if (deltaY > 60) {
                triggerFlowers();
            }
        });
        
        document.addEventListener('touchend', function() {
            if (!isDragging || hasTriggered) return;
            isDragging = false;
            
            if (!hasTriggered) {
                pullInstruction.style.transform = 'translateY(0)';
            }
        });
        
        function triggerFlowers() {
            if (hasTriggered) return;
            hasTriggered = true;
            
            const envelope = document.getElementById('envelope');
            
            // Open envelope first
            envelope.classList.add('opened');
            
            // Pull animation
            pullInstruction.classList.add('pulling');
            
            // Generate flowers
            setTimeout(() => {
                generateFlowers();
                pullInstruction.style.display = 'none';
            }, 1500);
            
            // Auto-close envelope after flowers appear
            setTimeout(() => {
                envelope.classList.remove('opened');
            }, 8000);
            
            // Create floating petal after some time
            setTimeout(() => {
                createFloatingPetal();
            }, 12000);
        }
        
        // Envelope click to close/reopen
        document.getElementById('envelope').addEventListener('click', function() {
            if (this.classList.contains('opened')) {
                this.classList.remove('opened');
                createFloatingPetal();
            }
        });