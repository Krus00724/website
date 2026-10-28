(()=>{var Ua="137";var ih=0,Ya=1,rh=2;var Rc=1,sh=2,Wi=3,$i=0,ot=1,xi=2,Cc=1;var mn=0,Xi=1,Ja=2,Za=3,$a=4,oh=5,ci=100,ah=101,lh=102,ja=103,Ka=104,ch=200,hh=201,uh=202,dh=203,Lc=204,Pc=205,fh=206,ph=207,mh=208,gh=209,xh=210,yh=0,vh=1,_h=2,To=3,Mh=4,wh=5,bh=6,Sh=7,Fs=0,Eh=1,Th=2,gn=0,Ah=1,Rh=2,Ch=3,Ha=4,Lh=5,Dc=300,Sr=301,Er=302,ji=303,Ao=304,Ns=306,Ga=307,Nn=1e3,Rt=1001,Ro=1002,at=1003,Qa=1004;var el=1005;var xt=1006,Ph=1007;var Bs=1008;var xn=1009,Dh=1010,Ih=1011,Ki=1012,Fh=1013,os=1014,In=1015,fi=1016,Nh=1017,Bh=1018,pi=1020,zh=1021,Oh=1022,Mt=1023,Uh=1024,Hh=1025,Fn=1026,yi=1027,Gh=1028,Vh=1029,kh=1030,Wh=1031,qh=1033,Hs=33776,Gs=33777,Vs=33778,ks=33779,tl=35840,nl=35841,il=35842,rl=35843,Xh=36196,sl=37492,ol=37496,al=37808,ll=37809,cl=37810,hl=37811,ul=37812,dl=37813,fl=37814,pl=37815,ml=37816,gl=37817,xl=37818,yl=37819,vl=37820,_l=37821,Ml=36492,Yh=2200,Jh=2201,Zh=2202,as=2300,ls=2301,Ws=2302,hi=2400,ui=2401,cs=2402,Va=2500,Ic=2501,$h=0;var Mn=3e3,qe=3001,jh=3200,Kh=3201,Pi=0,Qh=1;var qs=7680;var eu=519,Qi=35044,hs=35048;var wl="300 es",Co=1035,tn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},ft=[];for(let s=0;s<256;s++)ft[s]=(s<16?"0":"")+s.toString(16);var Xs=Math.PI/180,Lo=180/Math.PI;function Ut(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ft[s&255]+ft[s>>8&255]+ft[s>>16&255]+ft[s>>24&255]+"-"+ft[e&255]+ft[e>>8&255]+"-"+ft[e>>16&15|64]+ft[e>>24&255]+"-"+ft[t&63|128]+ft[t>>8&255]+"-"+ft[t>>16&255]+ft[t>>24&255]+ft[n&255]+ft[n>>8&255]+ft[n>>16&255]+ft[n>>24&255]).toUpperCase()}function bt(s,e,t){return Math.max(e,Math.min(t,s))}function tu(s,e){return(s%e+e)%e}function Ys(s,e,t){return(1-t)*s+t*e}function bl(s){return(s&s-1)===0&&s!==0}function nu(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}var K=class{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};K.prototype.isVector2=!0;var lt=class{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],x=i[0],_=i[3],m=i[6],f=i[1],T=i[4],M=i[7],E=i[2],R=i[5],L=i[8];return r[0]=o*x+a*f+c*E,r[3]=o*_+a*T+c*R,r[6]=o*m+a*M+c*L,r[1]=l*x+h*f+u*E,r[4]=l*_+h*T+u*R,r[7]=l*m+h*M+u*L,r[2]=d*x+p*f+g*E,r[5]=d*_+p*T+g*R,r[8]=d*m+p*M+g*L,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,p=l*r-o*c,g=t*u+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(i*l-h*n)*x,e[2]=(a*n-i*o)*x,e[3]=d*x,e[4]=(h*t-i*c)*x,e[5]=(i*r-a*t)*x,e[6]=p*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){let t=Math.cos(e),n=Math.sin(e),i=this.elements,r=i[0],o=i[3],a=i[6],c=i[1],l=i[4],h=i[7];return i[0]=t*r+n*c,i[3]=t*o+n*l,i[6]=t*a+n*h,i[1]=-n*r+t*c,i[4]=-n*o+t*l,i[7]=-n*a+t*h,this}translate(e,t){let n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};lt.prototype.isMatrix3=!0;function Fc(s){for(let e=s.length-1;e>=0;--e)if(s[e]>65535)return!0;return!1}function er(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}var Nc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ft={h:0,s:0,l:0},Ar={h:0,s:0,l:0};function Js(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}function mi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Zs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var xe=class{constructor(e,t,n){return t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,n){return this.r=e,this.g=t,this.b=n,this}setHSL(e,t,n){if(e=tu(e,1),t=bt(t,0,1),n=bt(n,0,1),t===0)this.r=this.g=this.b=n;else{let i=n<=.5?n*(1+t):n+t-n*t,r=2*n-i;this.r=Js(r,i,e+1/3),this.g=Js(r,i,e),this.b=Js(r,i,e-1/3)}return this}setStyle(e){function t(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let i,r=n[1],o=n[2];switch(r){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,t(i[4]),this;if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,t(i[4]),this;break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){let a=parseFloat(i[1])/360,c=parseInt(i[2],10)/100,l=parseInt(i[3],10)/100;return t(i[4]),this.setHSL(a,c,l)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let i=n[1],r=i.length;if(r===3)return this.r=parseInt(i.charAt(0)+i.charAt(0),16)/255,this.g=parseInt(i.charAt(1)+i.charAt(1),16)/255,this.b=parseInt(i.charAt(2)+i.charAt(2),16)/255,this;if(r===6)return this.r=parseInt(i.charAt(0)+i.charAt(1),16)/255,this.g=parseInt(i.charAt(2)+i.charAt(3),16)/255,this.b=parseInt(i.charAt(4)+i.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){let t=Nc[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mi(e.r),this.g=mi(e.g),this.b=mi(e.b),this}copyLinearToSRGB(e){return this.r=Zs(e.r),this.g=Zs(e.g),this.b=Zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){let t=this.r,n=this.g,i=this.b,r=Math.max(t,n,i),o=Math.min(t,n,i),a,c,l=(o+r)/2;if(o===r)a=0,c=0;else{let h=r-o;switch(c=l<=.5?h/(r+o):h/(2-r-o),r){case t:a=(n-i)/h+(n<i?6:0);break;case n:a=(i-t)/h+2;break;case i:a=(t-n)/h+4;break}a/=6}return e.h=a,e.s=c,e.l=l,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,n){return this.getHSL(Ft),Ft.h+=e,Ft.s+=t,Ft.l+=n,this.setHSL(Ft.h,Ft.s,Ft.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ft),e.getHSL(Ar);let n=Ys(Ft.h,Ar.h,t),i=Ys(Ft.s,Ar.s,t),r=Ys(Ft.l,Ar.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}};xe.NAMES=Nc;xe.prototype.isColor=!0;xe.prototype.r=1;xe.prototype.g=1;xe.prototype.b=1;var Wn,nn=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Wn===void 0&&(Wn=er("canvas")),Wn.width=e.width,Wn.height=e.height;let n=Wn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Wn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=er("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=mi(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(mi(t[n]/255)*255):t[n]=mi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},iu=0,pt=class s extends tn{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Rt,i=Rt,r=xt,o=Bs,a=Mt,c=xn,l=1,h=Mn){super(),Object.defineProperty(this,"id",{value:iu++}),this.uuid=Ut(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new K(0,0),this.repeat=new K(1,1),this.center=new K(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){let i=this.image;if(i.uuid===void 0&&(i.uuid=Ut()),!t&&e.images[i.uuid]===void 0){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push($s(i[o].image)):r.push($s(i[o]))}else r=$s(i);e.images[i.uuid]={uuid:i.uuid,url:r}}n.image=i.uuid}return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Nn:e.x=e.x-Math.floor(e.x);break;case Rt:e.x=e.x<0?0:1;break;case Ro:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Nn:e.y=e.y-Math.floor(e.y);break;case Rt:e.y=e.y<0?0:1;break;case Ro:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}};pt.DEFAULT_IMAGE=void 0;pt.DEFAULT_MAPPING=Dc;pt.prototype.isTexture=!0;function $s(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?nn.getDataURL(s):s.data?{data:Array.prototype.slice.call(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var We=class{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],g=c[9],x=c[2],_=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-_)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+_)<.1&&Math.abs(l+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(l+1)/2,M=(p+1)/2,E=(m+1)/2,R=(h+d)/4,L=(u+x)/4,Z=(g+_)/4;return T>M&&T>E?T<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(T),i=R/n,r=L/n):M>E?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=R/i,r=Z/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=L/r,i=Z/r),this.set(n,i,r,t),this}let f=Math.sqrt((_-g)*(_-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(f)<.001&&(f=1),this.x=(_-g)/f,this.y=(u-x)/f,this.z=(d-h)/f,this.w=Math.acos((l+p+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};We.prototype.isVector4=!0;var St=class extends tn{constructor(e,t,n={}){super(),this.width=e,this.height=t,this.depth=1,this.scissor=new We(0,0,e,t),this.scissorTest=!1,this.viewport=new We(0,0,e,t),this.texture=new pt(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.image={width:e,height:t,depth:1},this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:xt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.image=Object.assign({},e.texture.image),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}};St.prototype.isWebGLRenderTarget=!0;var Po=class extends St{constructor(e,t,n){super(e,t);let i=this.texture;this.texture=[];for(let r=0;r<n;r++)this.texture[r]=i.clone()}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.texture.length;i<r;i++)this.texture[i].image.width=e,this.texture[i].image.height=t,this.texture[i].image.depth=n;this.dispose()}return this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t),this}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this.texture.length=0;for(let t=0,n=e.texture.length;t<n;t++)this.texture[t]=e.texture[t].clone();return this}};Po.prototype.isWebGLMultipleRenderTargets=!0;var tr=class extends St{constructor(e,t,n={}){super(e,t,n),this.samples=4,this.ignoreDepthForMultisampleCopy=n.ignoreDepth!==void 0?n.ignoreDepth:!0,this.useRenderToTexture=n.useRenderToTexture!==void 0?n.useRenderToTexture:!1,this.useRenderbuffer=this.useRenderToTexture===!1}copy(e){return super.copy.call(this,e),this.samples=e.samples,this.useRenderToTexture=e.useRenderToTexture,this.useRenderbuffer=e.useRenderbuffer,this}};tr.prototype.isWebGLMultisampleRenderTarget=!0;var yt=class{constructor(e=0,t=0,n=0,i=1){this._x=e,this._y=t,this._z=n,this._w=i}static slerp(e,t,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,i)}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],d=r[o+0],p=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(u!==x||c!==d||l!==p||h!==g){let _=1-a,m=c*d+l*p+h*g+u*x,f=m>=0?1:-1,T=1-m*m;if(T>Number.EPSILON){let E=Math.sqrt(T),R=Math.atan2(E,m*f);_=Math.sin(_*R)/E,a=Math.sin(a*R)/E}let M=a*f;if(c=c*_+d*M,l=l*_+p*M,h=h*_+g*M,u=u*_+x*M,_===1-a){let E=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=E,l*=E,h*=E,u*=E}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*p-l*d,e[t+1]=c*g+h*d+l*u-a*p,e[t+2]=l*g+h*p+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),d=c(n/2),p=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"YZX":this._x=d*h*u+l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u-d*p*g;break;case"XZY":this._x=d*h*u-l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-i)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+l)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(r-l)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-i)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this._onChangeCallback(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}};yt.prototype.isQuaternion=!0;var S=class{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Sl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sl.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=c*t+o*i-a*n,h=c*n+a*t-r*i,u=c*i+r*n-o*t,d=-r*t-o*n-a*i;return this.x=l*c+d*-r+h*-a-u*-o,this.y=h*c+d*-o+u*-r-l*-a,this.z=u*c+d*-a+l*-o-h*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return js.copy(this).projectOnVector(e),this.sub(js)}reflect(e){return this.sub(js.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};S.prototype.isVector3=!0;var js=new S,Sl=new yt,Ct=class{constructor(e=new S(1/0,1/0,1/0),t=new S(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.length;c<l;c+=3){let h=e[c],u=e[c+1],d=e[c+2];h<t&&(t=h),u<n&&(n=u),d<i&&(i=d),h>r&&(r=h),u>o&&(o=u),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(r,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.count;c<l;c++){let h=e.getX(c),u=e.getY(c),d=e.getZ(c);h<t&&(t=h),u<n&&(n=u),d<i&&(i=d),h>r&&(r=h),u>o&&(o=u),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(r,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){let r=n.attributes.position;for(let o=0,a=r.count;o<a;o++)Cn.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Cn)}else n.boundingBox===null&&n.computeBoundingBox(),Ks.copy(n.boundingBox),Ks.applyMatrix4(e.matrixWorld),this.union(Ks);let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ni),Rr.subVectors(this.max,Ni),qn.subVectors(e.a,Ni),Xn.subVectors(e.b,Ni),Yn.subVectors(e.c,Ni),an.subVectors(Xn,qn),ln.subVectors(Yn,Xn),Ln.subVectors(qn,Yn);let t=[0,-an.z,an.y,0,-ln.z,ln.y,0,-Ln.z,Ln.y,an.z,0,-an.x,ln.z,0,-ln.x,Ln.z,0,-Ln.x,-an.y,an.x,0,-ln.y,ln.x,0,-Ln.y,Ln.x,0];return!Qs(t,qn,Xn,Yn,Rr)||(t=[1,0,0,0,1,0,0,0,1],!Qs(t,qn,Xn,Yn,Rr))?!1:(Cr.crossVectors(an,ln),t=[Cr.x,Cr.y,Cr.z],Qs(t,qn,Xn,Yn,Rr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Cn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};Ct.prototype.isBox3=!0;var Zt=[new S,new S,new S,new S,new S,new S,new S,new S],Cn=new S,Ks=new Ct,qn=new S,Xn=new S,Yn=new S,an=new S,ln=new S,Ln=new S,Ni=new S,Rr=new S,Cr=new S,Pn=new S;function Qs(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Pn.fromArray(s,r);let a=i.x*Math.abs(Pn.x)+i.y*Math.abs(Pn.y)+i.z*Math.abs(Pn.z),c=e.dot(Pn),l=t.dot(Pn),h=n.dot(Pn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var ru=new Ct,El=new S,Lr=new S,eo=new S,wn=class{constructor(e=new S,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):ru.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){eo.subVectors(e,this.center);let t=eo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(eo.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return this.center.equals(e.center)===!0?Lr.set(0,0,1).multiplyScalar(e.radius):Lr.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(El.copy(e.center).add(Lr)),this.expandByPoint(El.copy(e.center).sub(Lr)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},$t=new S,to=new S,Pr=new S,cn=new S,no=new S,Dr=new S,io=new S,bn=class{constructor(e=new S,t=new S(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$t)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=$t.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($t.copy(this.direction).multiplyScalar(t).add(this.origin),$t.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){to.copy(e).add(t).multiplyScalar(.5),Pr.copy(t).sub(e).normalize(),cn.copy(this.origin).sub(to);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Pr),a=cn.dot(this.direction),c=-cn.dot(Pr),l=cn.lengthSq(),h=Math.abs(1-o*o),u,d,p,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,p=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(u).add(this.origin),i&&i.copy(Pr).multiplyScalar(d).add(to),p}intersectSphere(e,t){$t.subVectors(e.center,this.origin);let n=$t.dot(this.direction),i=$t.dot($t)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return a<0&&c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||n!==n)&&(n=r),(o<i||i!==i)&&(i=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,$t)!==null}intersectTriangle(e,t,n,i,r){no.subVectors(t,e),Dr.subVectors(n,e),io.crossVectors(no,Dr);let o=this.direction.dot(io),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;cn.subVectors(this.origin,e);let c=a*this.direction.dot(Dr.crossVectors(cn,Dr));if(c<0)return null;let l=a*this.direction.dot(no.cross(cn));if(l<0||c+l>o)return null;let h=-a*cn.dot(io);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},be=class s{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,r,o,a,c,l,h,u,d,p,g,x,_){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=d,m[3]=p,m[7]=g,m[11]=x,m[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Jn.setFromMatrixColumn(e,0).length(),r=1/Jn.setFromMatrixColumn(e,1).length(),o=1/Jn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,p=o*u,g=a*h,x=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+g*l,t[5]=d-x*l,t[9]=-a*c,t[2]=x-d*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*h,p=c*u,g=l*h,x=l*u;t[0]=d+x*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=x+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*h,p=c*u,g=l*h,x=l*u;t[0]=d-x*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*h,p=o*u,g=a*h,x=a*u;t[0]=c*h,t[4]=g*l-p,t[8]=d*l+x,t[1]=c*u,t[5]=x*l+d,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,p=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=x-d*u,t[8]=g*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=p*u+g,t[10]=d-x*u}else if(e.order==="XZY"){let d=o*c,p=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+x,t[5]=o*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(su,e,ou)}lookAt(e,t,n){let i=this.elements;return Tt.subVectors(e,t),Tt.lengthSq()===0&&(Tt.z=1),Tt.normalize(),hn.crossVectors(n,Tt),hn.lengthSq()===0&&(Math.abs(n.z)===1?Tt.x+=1e-4:Tt.z+=1e-4,Tt.normalize(),hn.crossVectors(n,Tt)),hn.normalize(),Ir.crossVectors(Tt,hn),i[0]=hn.x,i[4]=Ir.x,i[8]=Tt.x,i[1]=hn.y,i[5]=Ir.y,i[9]=Tt.y,i[2]=hn.z,i[6]=Ir.z,i[10]=Tt.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],x=n[6],_=n[10],m=n[14],f=n[3],T=n[7],M=n[11],E=n[15],R=i[0],L=i[4],Z=i[8],ce=i[12],$=i[1],y=i[5],C=i[9],I=i[13],N=i[2],B=i[6],F=i[10],U=i[14],j=i[3],he=i[7],k=i[11],Y=i[15];return r[0]=o*R+a*$+c*N+l*j,r[4]=o*L+a*y+c*B+l*he,r[8]=o*Z+a*C+c*F+l*k,r[12]=o*ce+a*I+c*U+l*Y,r[1]=h*R+u*$+d*N+p*j,r[5]=h*L+u*y+d*B+p*he,r[9]=h*Z+u*C+d*F+p*k,r[13]=h*ce+u*I+d*U+p*Y,r[2]=g*R+x*$+_*N+m*j,r[6]=g*L+x*y+_*B+m*he,r[10]=g*Z+x*C+_*F+m*k,r[14]=g*ce+x*I+_*U+m*Y,r[3]=f*R+T*$+M*N+E*j,r[7]=f*L+T*y+M*B+E*he,r[11]=f*Z+T*C+M*F+E*k,r[15]=f*ce+T*I+M*U+E*Y,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],x=e[7],_=e[11],m=e[15];return g*(+r*c*u-i*l*u-r*a*d+n*l*d+i*a*p-n*c*p)+x*(+t*c*p-t*l*d+r*o*d-i*o*p+i*l*h-r*c*h)+_*(+t*l*u-t*a*p-r*o*u+n*o*p+r*a*h-n*l*h)+m*(-i*a*h-t*c*u+t*a*d+i*o*u-n*o*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],x=e[13],_=e[14],m=e[15],f=u*_*l-x*d*l+x*c*p-a*_*p-u*c*m+a*d*m,T=g*d*l-h*_*l-g*c*p+o*_*p+h*c*m-o*d*m,M=h*x*l-g*u*l+g*a*p-o*x*p-h*a*m+o*u*m,E=g*u*c-h*x*c-g*a*d+o*x*d+h*a*_-o*u*_,R=t*f+n*T+i*M+r*E;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/R;return e[0]=f*L,e[1]=(x*d*r-u*_*r-x*i*p+n*_*p+u*i*m-n*d*m)*L,e[2]=(a*_*r-x*c*r+x*i*l-n*_*l-a*i*m+n*c*m)*L,e[3]=(u*c*r-a*d*r-u*i*l+n*d*l+a*i*p-n*c*p)*L,e[4]=T*L,e[5]=(h*_*r-g*d*r+g*i*p-t*_*p-h*i*m+t*d*m)*L,e[6]=(g*c*r-o*_*r-g*i*l+t*_*l+o*i*m-t*c*m)*L,e[7]=(o*d*r-h*c*r+h*i*l-t*d*l-o*i*p+t*c*p)*L,e[8]=M*L,e[9]=(g*u*r-h*x*r-g*n*p+t*x*p+h*n*m-t*u*m)*L,e[10]=(o*x*r-g*a*r+g*n*l-t*x*l-o*n*m+t*a*m)*L,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*p-t*a*p)*L,e[12]=E*L,e[13]=(h*x*i-g*u*i+g*n*d-t*x*d-h*n*_+t*u*_)*L,e[14]=(g*a*i-o*x*i-g*n*c+t*x*c+o*n*_-t*a*_)*L,e[15]=(o*u*i-h*a*i+h*n*c-t*u*c-o*n*d+t*a*d)*L,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,p=r*h,g=r*u,x=o*h,_=o*u,m=a*u,f=c*l,T=c*h,M=c*u,E=n.x,R=n.y,L=n.z;return i[0]=(1-(x+m))*E,i[1]=(p+M)*E,i[2]=(g-T)*E,i[3]=0,i[4]=(p-M)*R,i[5]=(1-(d+m))*R,i[6]=(_+f)*R,i[7]=0,i[8]=(g+T)*L,i[9]=(_-f)*L,i[10]=(1-(d+x))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=Jn.set(i[0],i[1],i[2]).length(),o=Jn.set(i[4],i[5],i[6]).length(),a=Jn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Nt.copy(this);let l=1/r,h=1/o,u=1/a;return Nt.elements[0]*=l,Nt.elements[1]*=l,Nt.elements[2]*=l,Nt.elements[4]*=h,Nt.elements[5]*=h,Nt.elements[6]*=h,Nt.elements[8]*=u,Nt.elements[9]*=u,Nt.elements[10]*=u,t.setFromRotationMatrix(Nt),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");let a=this.elements,c=2*r/(t-e),l=2*r/(n-i),h=(t+e)/(t-e),u=(n+i)/(n-i),d=-(o+r)/(o-r),p=-2*o*r/(o-r);return a[0]=c,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=l,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,r,o){let a=this.elements,c=1/(t-e),l=1/(n-i),h=1/(o-r),u=(t+e)*c,d=(n+i)*l,p=(o+r)*h;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};be.prototype.isMatrix4=!0;var Jn=new S,Nt=new be,su=new S(0,0,0),ou=new S(1,1,1),hn=new S,Ir=new S,Tt=new S,Tl=new be,Al=new yt,vi=class s{constructor(e=0,t=0,n=0,i=s.DefaultOrder){this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(bt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-bt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(bt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Tl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Al.setFromEuler(this),this.setFromQuaternion(Al,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new S(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}};vi.prototype.isEuler=!0;vi.DefaultOrder="XYZ";vi.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];var us=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},au=0,Rl=new S,Zn=new yt,jt=new be,Fr=new S,Bi=new S,lu=new S,cu=new yt,Cl=new S(1,0,0),Ll=new S(0,1,0),Pl=new S(0,0,1),hu={type:"added"},Dl={type:"removed"},Ye=class s extends tn{constructor(){super(),Object.defineProperty(this,"id",{value:au++}),this.uuid=Ut(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DefaultUp.clone();let e=new S,t=new vi,n=new yt,i=new S(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new be},normalMatrix:{value:new lt}}),this.matrix=new be,this.matrixWorld=new be,this.matrixAutoUpdate=s.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new us,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zn.setFromAxisAngle(e,t),this.quaternion.multiply(Zn),this}rotateOnWorldAxis(e,t){return Zn.setFromAxisAngle(e,t),this.quaternion.premultiply(Zn),this}rotateX(e){return this.rotateOnAxis(Cl,e)}rotateY(e){return this.rotateOnAxis(Ll,e)}rotateZ(e){return this.rotateOnAxis(Pl,e)}translateOnAxis(e,t){return Rl.copy(e).applyQuaternion(this.quaternion),this.position.add(Rl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cl,e)}translateY(e){return this.translateOnAxis(Ll,e)}translateZ(e){return this.translateOnAxis(Pl,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(jt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Fr.copy(e):Fr.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Bi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jt.lookAt(Bi,Fr,this.up):jt.lookAt(Fr,Bi,this.up),this.quaternion.setFromRotationMatrix(jt),i&&(jt.extractRotation(i.matrixWorld),Zn.setFromRotationMatrix(jt),this.quaternion.premultiply(Zn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(hu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Dl)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){let t=this.children[e];t.parent=null,t.dispatchEvent(Dl)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),jt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jt.multiply(e.parent.matrixWorld)),e.applyMatrix4(jt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bi,e,lu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bi,cu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),p=o(e.animations);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p)}return n.object=i,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Ye.DefaultUp=new S(0,1,0);Ye.DefaultMatrixAutoUpdate=!0;Ye.prototype.isObject3D=!0;var Bt=new S,Kt=new S,ro=new S,Qt=new S,$n=new S,jn=new S,Il=new S,so=new S,oo=new S,ao=new S,vt=class s{constructor(e=new S,t=new S,n=new S){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Bt.subVectors(e,t),i.cross(Bt);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Bt.subVectors(i,t),Kt.subVectors(n,t),ro.subVectors(e,t);let o=Bt.dot(Bt),a=Bt.dot(Kt),c=Bt.dot(ro),l=Kt.dot(Kt),h=Kt.dot(ro),u=o*l-a*a;if(u===0)return r.set(-2,-1,-1);let d=1/u,p=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Qt),Qt.x>=0&&Qt.y>=0&&Qt.x+Qt.y<=1}static getUV(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,Qt),c.set(0,0),c.addScaledVector(r,Qt.x),c.addScaledVector(o,Qt.y),c.addScaledVector(a,Qt.z),c}static isFrontFacing(e,t,n,i){return Bt.subVectors(n,t),Kt.subVectors(e,t),Bt.cross(Kt).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bt.subVectors(this.c,this.b),Kt.subVectors(this.a,this.b),Bt.cross(Kt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return s.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;$n.subVectors(i,n),jn.subVectors(r,n),so.subVectors(e,n);let c=$n.dot(so),l=jn.dot(so);if(c<=0&&l<=0)return t.copy(n);oo.subVectors(e,i);let h=$n.dot(oo),u=jn.dot(oo);if(h>=0&&u<=h)return t.copy(i);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector($n,o);ao.subVectors(e,r);let p=$n.dot(ao),g=jn.dot(ao);if(g>=0&&p<=g)return t.copy(r);let x=p*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(jn,a);let _=h*g-p*u;if(_<=0&&u-h>=0&&p-g>=0)return Il.subVectors(r,i),a=(u-h)/(u-h+(p-g)),t.copy(i).addScaledVector(Il,a);let m=1/(_+x+d);return o=x*m,a=d*m,t.copy(n).addScaledVector($n,o).addScaledVector(jn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},uu=0,dt=class extends tn{constructor(){super(),Object.defineProperty(this,"id",{value:uu++}),this.uuid=Ut(),this.name="",this.type="Material",this.fog=!0,this.blending=Xi,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Lc,this.blendDst=Pc,this.blendEquation=ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=To,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=eu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qs,this.stencilZFail=qs,this.stencilZPass=qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===Cc;continue}let i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xi&&(n.blending=this.blending),this.side!==$i&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};dt.prototype.isMaterial=!0;var nr=class extends dt{constructor(e){super(),this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Fs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}};nr.prototype.isMeshBasicMaterial=!0;var Je=new S,Nr=new K,$e=class{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Qi,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){let t=this.array,n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),o=new xe),t[n++]=o.r,t[n++]=o.g,t[n++]=o.b}return this}copyVector2sArray(e){let t=this.array,n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),o=new K),t[n++]=o.x,t[n++]=o.y}return this}copyVector3sArray(e){let t=this.array,n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),o=new S),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z}return this}copyVector4sArray(e){let t=this.array,n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),o=new We),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z,t[n++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Nr.fromBufferAttribute(this,t),Nr.applyMatrix3(e),this.setXY(t,Nr.x,Nr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Je.fromBufferAttribute(this,t),Je.applyMatrix3(e),this.setXYZ(t,Je.x,Je.y,Je.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Je.x=this.getX(t),Je.y=this.getY(t),Je.z=this.getZ(t),Je.applyMatrix4(e),this.setXYZ(t,Je.x,Je.y,Je.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Je.x=this.getX(t),Je.y=this.getY(t),Je.z=this.getZ(t),Je.applyNormalMatrix(e),this.setXYZ(t,Je.x,Je.y,Je.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Je.x=this.getX(t),Je.y=this.getY(t),Je.z=this.getZ(t),Je.transformDirection(e),this.setXYZ(t,Je.x,Je.y,Je.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qi&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}};$e.prototype.isBufferAttribute=!0;var ds=class extends $e{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var fs=class extends $e{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Do=class extends $e{constructor(e,t,n){super(new Uint16Array(e),t,n)}};Do.prototype.isFloat16BufferAttribute=!0;var rt=class extends $e{constructor(e,t,n){super(new Float32Array(e),t,n)}};var du=0,Lt=new be,lo=new Ye,Kn=new S,At=new Ct,zi=new Ct,ht=new S,je=class s extends tn{constructor(){super(),Object.defineProperty(this,"id",{value:du++}),this.uuid=Ut(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fc(e)?fs:ds)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new lt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Lt.makeRotationFromQuaternion(e),this.applyMatrix4(Lt),this}rotateX(e){return Lt.makeRotationX(e),this.applyMatrix4(Lt),this}rotateY(e){return Lt.makeRotationY(e),this.applyMatrix4(Lt),this}rotateZ(e){return Lt.makeRotationZ(e),this.applyMatrix4(Lt),this}translate(e,t,n){return Lt.makeTranslation(e,t,n),this.applyMatrix4(Lt),this}scale(e,t,n){return Lt.makeScale(e,t,n),this.applyMatrix4(Lt),this}lookAt(e){return lo.lookAt(e),lo.updateMatrix(),this.applyMatrix4(lo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kn).negate(),this.translate(Kn.x,Kn.y,Kn.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new rt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ct);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];At.setFromBufferAttribute(r),this.morphTargetsRelative?(ht.addVectors(this.boundingBox.min,At.min),this.boundingBox.expandByPoint(ht),ht.addVectors(this.boundingBox.max,At.max),this.boundingBox.expandByPoint(ht)):(this.boundingBox.expandByPoint(At.min),this.boundingBox.expandByPoint(At.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new S,1/0);return}if(e){let n=this.boundingSphere.center;if(At.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];zi.setFromBufferAttribute(a),this.morphTargetsRelative?(ht.addVectors(At.min,zi.min),At.expandByPoint(ht),ht.addVectors(At.max,zi.max),At.expandByPoint(ht)):(At.expandByPoint(zi.min),At.expandByPoint(zi.max))}At.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)ht.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(ht));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)ht.fromBufferAttribute(a,l),c&&(Kn.fromBufferAttribute(e,l),ht.add(Kn)),i=Math.max(i,n.distanceToSquared(ht))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;t.tangent===void 0&&this.setAttribute("tangent",new $e(new Float32Array(4*a),4));let c=t.tangent.array,l=[],h=[];for(let $=0;$<a;$++)l[$]=new S,h[$]=new S;let u=new S,d=new S,p=new S,g=new K,x=new K,_=new K,m=new S,f=new S;function T($,y,C){u.fromArray(i,$*3),d.fromArray(i,y*3),p.fromArray(i,C*3),g.fromArray(o,$*2),x.fromArray(o,y*2),_.fromArray(o,C*2),d.sub(u),p.sub(u),x.sub(g),_.sub(g);let I=1/(x.x*_.y-_.x*x.y);isFinite(I)&&(m.copy(d).multiplyScalar(_.y).addScaledVector(p,-x.y).multiplyScalar(I),f.copy(p).multiplyScalar(x.x).addScaledVector(d,-_.x).multiplyScalar(I),l[$].add(m),l[y].add(m),l[C].add(m),h[$].add(f),h[y].add(f),h[C].add(f))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let $=0,y=M.length;$<y;++$){let C=M[$],I=C.start,N=C.count;for(let B=I,F=I+N;B<F;B+=3)T(n[B+0],n[B+1],n[B+2])}let E=new S,R=new S,L=new S,Z=new S;function ce($){L.fromArray(r,$*3),Z.copy(L);let y=l[$];E.copy(y),E.sub(L.multiplyScalar(L.dot(y))).normalize(),R.crossVectors(Z,y);let I=R.dot(h[$])<0?-1:1;c[$*4]=E.x,c[$*4+1]=E.y,c[$*4+2]=E.z,c[$*4+3]=I}for(let $=0,y=M.length;$<y;++$){let C=M[$],I=C.start,N=C.count;for(let B=I,F=I+N;B<F;B+=3)ce(n[B+0]),ce(n[B+1]),ce(n[B+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $e(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let i=new S,r=new S,o=new S,a=new S,c=new S,l=new S,h=new S,u=new S;if(e)for(let d=0,p=e.count;d<p;d+=3){let g=e.getX(d+0),x=e.getX(d+1),_=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,_),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,_),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(_,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));let n=this.attributes;for(let i in n){if(e.attributes[i]===void 0)continue;let o=n[i].array,a=e.attributes[i],c=a.array,l=a.itemSize*t,h=Math.min(c.length,o.length-l);for(let u=0,d=l;u<h;u++,d++)o[d]=c[u]}return this}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ht.fromBufferAttribute(e,t),ht.normalize(),e.setXYZ(t,ht.x,ht.y,ht.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),p=0,g=0;for(let x=0,_=c.length;x<_;x++){a.isInterleavedBufferAttribute?p=c[x]*a.data.stride+a.offset:p=c[x]*h;for(let m=0;m<h;m++)d[g++]=l[p++]}return new $e(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],p=e(d,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}};je.prototype.isBufferGeometry=!0;var Fl=new be,Qn=new bn,co=new wn,un=new S,dn=new S,fn=new S,ho=new S,uo=new S,fo=new S,Br=new S,zr=new S,Or=new S,Ur=new K,Hr=new K,Gr=new K,po=new S,Vr=new S,ct=class extends Ye{constructor(e=new je,t=new nr){super(),this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry;if(e.isBufferGeometry){let t=e.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}else{let t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),co.copy(n.boundingSphere),co.applyMatrix4(r),e.ray.intersectsSphere(co)===!1)||(Fl.copy(r).invert(),Qn.copy(e.ray).applyMatrix4(Fl),n.boundingBox!==null&&Qn.intersectsBox(n.boundingBox)===!1))return;let o;if(n.isBufferGeometry){let a=n.index,c=n.attributes.position,l=n.morphAttributes.position,h=n.morphTargetsRelative,u=n.attributes.uv,d=n.attributes.uv2,p=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(i))for(let x=0,_=p.length;x<_;x++){let m=p[x],f=i[m.materialIndex],T=Math.max(m.start,g.start),M=Math.min(a.count,Math.min(m.start+m.count,g.start+g.count));for(let E=T,R=M;E<R;E+=3){let L=a.getX(E),Z=a.getX(E+1),ce=a.getX(E+2);o=kr(this,f,e,Qn,c,l,h,u,d,L,Z,ce),o&&(o.faceIndex=Math.floor(E/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{let x=Math.max(0,g.start),_=Math.min(a.count,g.start+g.count);for(let m=x,f=_;m<f;m+=3){let T=a.getX(m),M=a.getX(m+1),E=a.getX(m+2);o=kr(this,i,e,Qn,c,l,h,u,d,T,M,E),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}else if(c!==void 0)if(Array.isArray(i))for(let x=0,_=p.length;x<_;x++){let m=p[x],f=i[m.materialIndex],T=Math.max(m.start,g.start),M=Math.min(c.count,Math.min(m.start+m.count,g.start+g.count));for(let E=T,R=M;E<R;E+=3){let L=E,Z=E+1,ce=E+2;o=kr(this,f,e,Qn,c,l,h,u,d,L,Z,ce),o&&(o.faceIndex=Math.floor(E/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{let x=Math.max(0,g.start),_=Math.min(c.count,g.start+g.count);for(let m=x,f=_;m<f;m+=3){let T=m,M=m+1,E=m+2;o=kr(this,i,e,Qn,c,l,h,u,d,T,M,E),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}};ct.prototype.isMesh=!0;function fu(s,e,t,n,i,r,o,a){let c;if(e.side===ot?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side!==xi,a),c===null)return null;Vr.copy(a),Vr.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(Vr);return l<t.near||l>t.far?null:{distance:l,point:Vr.clone(),object:s}}function kr(s,e,t,n,i,r,o,a,c,l,h,u){un.fromBufferAttribute(i,l),dn.fromBufferAttribute(i,h),fn.fromBufferAttribute(i,u);let d=s.morphTargetInfluences;if(r&&d){Br.set(0,0,0),zr.set(0,0,0),Or.set(0,0,0);for(let g=0,x=r.length;g<x;g++){let _=d[g],m=r[g];_!==0&&(ho.fromBufferAttribute(m,l),uo.fromBufferAttribute(m,h),fo.fromBufferAttribute(m,u),o?(Br.addScaledVector(ho,_),zr.addScaledVector(uo,_),Or.addScaledVector(fo,_)):(Br.addScaledVector(ho.sub(un),_),zr.addScaledVector(uo.sub(dn),_),Or.addScaledVector(fo.sub(fn),_)))}un.add(Br),dn.add(zr),fn.add(Or)}s.isSkinnedMesh&&(s.boneTransform(l,un),s.boneTransform(h,dn),s.boneTransform(u,fn));let p=fu(s,e,t,n,un,dn,fn,po);if(p){a&&(Ur.fromBufferAttribute(a,l),Hr.fromBufferAttribute(a,h),Gr.fromBufferAttribute(a,u),p.uv=vt.getUV(po,un,dn,fn,Ur,Hr,Gr,new K)),c&&(Ur.fromBufferAttribute(c,l),Hr.fromBufferAttribute(c,h),Gr.fromBufferAttribute(c,u),p.uv2=vt.getUV(po,un,dn,fn,Ur,Hr,Gr,new K));let g={a:l,b:h,c:u,normal:new S,materialIndex:0};vt.getNormal(un,dn,fn,g.normal),p.face=g}return p}var ir=class s extends je{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new rt(l,3)),this.setAttribute("normal",new rt(h,3)),this.setAttribute("uv",new rt(u,2));function g(x,_,m,f,T,M,E,R,L,Z,ce){let $=M/L,y=E/Z,C=M/2,I=E/2,N=R/2,B=L+1,F=Z+1,U=0,j=0,he=new S;for(let k=0;k<F;k++){let Y=k*y-I;for(let re=0;re<B;re++){let fe=re*$-C;he[x]=fe*f,he[_]=Y*T,he[m]=N,l.push(he.x,he.y,he.z),he[x]=0,he[_]=0,he[m]=R>0?1:-1,h.push(he.x,he.y,he.z),u.push(re/L),u.push(1-k/Z),U+=1}}for(let k=0;k<Z;k++)for(let Y=0;Y<L;Y++){let re=d+Y+B*k,fe=d+Y+B*(k+1),_e=d+(Y+1)+B*(k+1),H=d+(Y+1)+B*k;c.push(re,fe,H),c.push(fe,_e,H),j+=6}a.addGroup(p,j,ce),p+=j,d+=U}}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function _i(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function gt(s){let e={};for(let t=0;t<s.length;t++){let n=_i(s[t]);for(let i in n)e[i]=n[i]}return e}var pu={clone:_i,merge:gt},mu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,rn=class extends dt{constructor(e){super(),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=mu,this.fragmentShader=gu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_i(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}};rn.prototype.isShaderMaterial=!0;var rr=class extends Ye{constructor(){super(),this.type="Camera",this.matrixWorldInverse=new be,this.projectionMatrix=new be,this.projectionMatrixInverse=new be}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};rr.prototype.isCamera=!0;var ut=class extends rr{constructor(e=50,t=1,n=.1,i=2e3){super(),this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Lo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Xs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lo*2*Math.atan(Math.tan(Xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Xs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};ut.prototype.isPerspectiveCamera=!0;var ei=90,ti=1,sr=class extends Ye{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;let i=new ut(ei,ti,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new S(1,0,0)),this.add(i);let r=new ut(ei,ti,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new S(-1,0,0)),this.add(r);let o=new ut(ei,ti,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new S(0,1,0)),this.add(o);let a=new ut(ei,ti,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new S(0,-1,0)),this.add(a);let c=new ut(ei,ti,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new S(0,0,1)),this.add(c);let l=new ut(ei,ti,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new S(0,0,-1)),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();let n=this.renderTarget,[i,r,o,a,c,l]=this.children,h=e.xr.enabled,u=e.getRenderTarget();e.xr.enabled=!1;let d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(u),e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}},Mi=class extends pt{constructor(e,t,n,i,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Sr,super(e,t,n,i,r,o,a,c,l,h),this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};Mi.prototype.isCubeTexture=!0;var ps=class extends St{constructor(e,t,n){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=n),super(e,e,t),t=t||{},this.texture=new Mi(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:xt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=Mt,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ir(5,5,5),r=new rn({name:"CubemapFromEquirect",uniforms:_i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ot,blending:mn});r.uniforms.tEquirect.value=t;let o=new ct(i,r),a=t.minFilter;return t.minFilter===Bs&&(t.minFilter=xt),new sr(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}};ps.prototype.isWebGLCubeRenderTarget=!0;var mo=new S,xu=new S,yu=new lt,zt=class{constructor(e=new S(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=mo.subVectors(n,t).cross(xu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){let n=e.delta(mo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||yu.getNormalMatrix(e),i=this.coplanarPoint(mo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};zt.prototype.isPlane=!0;var ni=new wn,Wr=new S,wi=class{constructor(e=new zt,t=new zt,n=new zt,i=new zt,r=new zt,o=new zt){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){let t=this.planes,n=e.elements,i=n[0],r=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],u=n[7],d=n[8],p=n[9],g=n[10],x=n[11],_=n[12],m=n[13],f=n[14],T=n[15];return t[0].setComponents(a-i,u-c,x-d,T-_).normalize(),t[1].setComponents(a+i,u+c,x+d,T+_).normalize(),t[2].setComponents(a+r,u+l,x+p,T+m).normalize(),t[3].setComponents(a-r,u-l,x-p,T-m).normalize(),t[4].setComponents(a-o,u-h,x-g,T-f).normalize(),t[5].setComponents(a+o,u+h,x+g,T+f).normalize(),this}intersectsObject(e){let t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(ni)}intersectsSprite(e){return ni.center.set(0,0,0),ni.radius=.7071067811865476,ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(ni)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Wr.x=i.normal.x>0?e.max.x:e.min.x,Wr.y=i.normal.y>0?e.max.y:e.min.y,Wr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Wr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Bc(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function vu(s,e){let t=e.isWebGL2,n=new WeakMap;function i(l,h){let u=l.array,d=l.usage,p=s.createBuffer();s.bindBuffer(h,p),s.bufferData(h,u,d),l.onUploadCallback();let g=5126;return u instanceof Float32Array?g=5126:u instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):u instanceof Uint16Array?l.isFloat16BufferAttribute?t?g=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):g=5123:u instanceof Int16Array?g=5122:u instanceof Uint32Array?g=5125:u instanceof Int32Array?g=5124:u instanceof Int8Array?g=5120:(u instanceof Uint8Array||u instanceof Uint8ClampedArray)&&(g=5121),{buffer:p,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version}}function r(l,h,u){let d=h.array,p=h.updateRange;s.bindBuffer(u,l),p.count===-1?s.bufferSubData(u,0,d):(t?s.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):s.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1)}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(s.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);u===void 0?n.set(l,i(l,h)):u.version<l.version&&(r(u.buffer,l,h),u.version=l.version)}return{get:o,remove:a,update:c}}var Io=class s extends je{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=e/a,d=t/c,p=[],g=[],x=[],_=[];for(let m=0;m<h;m++){let f=m*d-o;for(let T=0;T<l;T++){let M=T*u-r;g.push(M,-f,0),x.push(0,0,1),_.push(T/a),_.push(1-m/c)}}for(let m=0;m<c;m++)for(let f=0;f<a;f++){let T=f+l*m,M=f+l*(m+1),E=f+1+l*(m+1),R=f+1+l*m;p.push(T,M,R),p.push(M,E,R)}this.setIndex(p),this.setAttribute("position",new rt(g,3)),this.setAttribute("normal",new rt(x,3)),this.setAttribute("uv",new rt(_,2))}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},_u=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Mu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,bu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Su=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Eu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tu="vec3 transformed = vec3( position );",Au=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ru=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Cu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Lu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Pu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Du=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Iu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,zu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ou=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Uu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 ) + 0.5;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		return texture2D( envMap, uv ).rgb;
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Hu=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Gu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,ku=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xu=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ju=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$u=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ju=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ku=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ed=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,td=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,id=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		lightMapIrradiance *= PI;
	#endif
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,rd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sd=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,od=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ad=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec;
			#ifdef ENVMAP_MODE_REFLECTION
				reflectVec = reflect( - viewDir, normal );
				reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			#else
				reflectVec = refract( - viewDir, normal, refractionRatio );
			#endif
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,ld=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,hd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ud=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,dd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,fd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pd=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,md=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,gd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,xd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,_d=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Md=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Sd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ed=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Td=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ad=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1, 2 ) * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Rd=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform vec2 morphTargetsTextureSize;
		vec3 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset, const in int stride ) {
			float texelIndex = float( vertexIndex * stride + offset );
			float y = floor( texelIndex / morphTargetsTextureSize.x );
			float x = texelIndex - y * morphTargetsTextureSize.x;
			vec3 morphUV = vec3( ( x + 0.5 ) / morphTargetsTextureSize.x, y / morphTargetsTextureSize.y, morphTargetIndex );
			return texture( morphTargetsTexture, morphUV ).xyz;
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Cd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			#ifndef USE_MORPHNORMALS
				if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 1 ) * morphTargetInfluences[ i ];
			#else
				if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 2 ) * morphTargetInfluences[ i ];
			#endif
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Ld=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Pd=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Dd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Id=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Bd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,zd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Od=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Ud=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Gd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yd=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Jd=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Zd=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,$d=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,jd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,Qd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ef=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,tf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,of=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,af=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef TEXTURE_LOD_EXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,lf=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,cf=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,hf=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,uf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,df=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,ff=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,pf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,mf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gf=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,xf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yf=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,vf=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,_f=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Mf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,wf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,bf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ef=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Af=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Rf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cf=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lf=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Df=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,If=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ff=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Nf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Of=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Vf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kf=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,qf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Fe={alphamap_fragment:_u,alphamap_pars_fragment:Mu,alphatest_fragment:wu,alphatest_pars_fragment:bu,aomap_fragment:Su,aomap_pars_fragment:Eu,begin_vertex:Tu,beginnormal_vertex:Au,bsdfs:Ru,bumpmap_pars_fragment:Cu,clipping_planes_fragment:Lu,clipping_planes_pars_fragment:Pu,clipping_planes_pars_vertex:Du,clipping_planes_vertex:Iu,color_fragment:Fu,color_pars_fragment:Nu,color_pars_vertex:Bu,color_vertex:zu,common:Ou,cube_uv_reflection_fragment:Uu,defaultnormal_vertex:Hu,displacementmap_pars_vertex:Gu,displacementmap_vertex:Vu,emissivemap_fragment:ku,emissivemap_pars_fragment:Wu,encodings_fragment:qu,encodings_pars_fragment:Xu,envmap_fragment:Yu,envmap_common_pars_fragment:Ju,envmap_pars_fragment:Zu,envmap_pars_vertex:$u,envmap_physical_pars_fragment:ad,envmap_vertex:ju,fog_vertex:Ku,fog_pars_vertex:Qu,fog_fragment:ed,fog_pars_fragment:td,gradientmap_pars_fragment:nd,lightmap_fragment:id,lightmap_pars_fragment:rd,lights_lambert_vertex:sd,lights_pars_begin:od,lights_toon_fragment:ld,lights_toon_pars_fragment:cd,lights_phong_fragment:hd,lights_phong_pars_fragment:ud,lights_physical_fragment:dd,lights_physical_pars_fragment:fd,lights_fragment_begin:pd,lights_fragment_maps:md,lights_fragment_end:gd,logdepthbuf_fragment:xd,logdepthbuf_pars_fragment:yd,logdepthbuf_pars_vertex:vd,logdepthbuf_vertex:_d,map_fragment:Md,map_pars_fragment:wd,map_particle_fragment:bd,map_particle_pars_fragment:Sd,metalnessmap_fragment:Ed,metalnessmap_pars_fragment:Td,morphnormal_vertex:Ad,morphtarget_pars_vertex:Rd,morphtarget_vertex:Cd,normal_fragment_begin:Ld,normal_fragment_maps:Pd,normal_pars_fragment:Dd,normal_pars_vertex:Id,normal_vertex:Fd,normalmap_pars_fragment:Nd,clearcoat_normal_fragment_begin:Bd,clearcoat_normal_fragment_maps:zd,clearcoat_pars_fragment:Od,output_fragment:Ud,packing:Hd,premultiplied_alpha_fragment:Gd,project_vertex:Vd,dithering_fragment:kd,dithering_pars_fragment:Wd,roughnessmap_fragment:qd,roughnessmap_pars_fragment:Xd,shadowmap_pars_fragment:Yd,shadowmap_pars_vertex:Jd,shadowmap_vertex:Zd,shadowmask_pars_fragment:$d,skinbase_vertex:jd,skinning_pars_vertex:Kd,skinning_vertex:Qd,skinnormal_vertex:ef,specularmap_fragment:tf,specularmap_pars_fragment:nf,tonemapping_fragment:rf,tonemapping_pars_fragment:sf,transmission_fragment:of,transmission_pars_fragment:af,uv_pars_fragment:lf,uv_pars_vertex:cf,uv_vertex:hf,uv2_pars_fragment:uf,uv2_pars_vertex:df,uv2_vertex:ff,worldpos_vertex:pf,background_vert:mf,background_frag:gf,cube_vert:xf,cube_frag:yf,depth_vert:vf,depth_frag:_f,distanceRGBA_vert:Mf,distanceRGBA_frag:wf,equirect_vert:bf,equirect_frag:Sf,linedashed_vert:Ef,linedashed_frag:Tf,meshbasic_vert:Af,meshbasic_frag:Rf,meshlambert_vert:Cf,meshlambert_frag:Lf,meshmatcap_vert:Pf,meshmatcap_frag:Df,meshnormal_vert:If,meshnormal_frag:Ff,meshphong_vert:Nf,meshphong_frag:Bf,meshphysical_vert:zf,meshphysical_frag:Of,meshtoon_vert:Uf,meshtoon_frag:Hf,points_vert:Gf,points_frag:Vf,shadow_vert:kf,shadow_frag:Wf,sprite_vert:qf,sprite_frag:Xf},se={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new lt},uv2Transform:{value:new lt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new K(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new K(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new lt}}},Wt={basic:{uniforms:gt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:gt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.fog,se.lights,{emissive:{value:new xe(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:gt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:gt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:gt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new xe(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:gt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:gt([se.points,se.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:gt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:gt([se.common,se.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:gt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:gt([se.sprite,se.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},cube:{uniforms:gt([se.envmap,{opacity:{value:1}}]),vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:gt([se.common,se.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:gt([se.lights,se.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};Wt.physical={uniforms:gt([Wt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new K(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new K},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};function Yf(s,e,t,n,i,r){let o=new xe(0),a=i===!0?0:1,c,l,h=null,u=0,d=null;function p(x,_){let m=!1,f=_.isScene===!0?_.background:null;f&&f.isTexture&&(f=e.get(f));let T=s.xr,M=T.getSession&&T.getSession();M&&M.environmentBlendMode==="additive"&&(f=null),f===null?g(o,a):f&&f.isColor&&(g(f,1),m=!0),(s.autoClear||m)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),f&&(f.isCubeTexture||f.mapping===Ns)?(l===void 0&&(l=new ct(new ir(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:_i(Wt.cube.uniforms),vertexShader:Wt.cube.vertexShader,fragmentShader:Wt.cube.fragmentShader,side:ot,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(E,R,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=f,l.material.uniforms.flipEnvMap.value=f.isCubeTexture&&f.isRenderTargetTexture===!1?-1:1,(h!==f||u!==f.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=f,u=f.version,d=s.toneMapping),x.unshift(l,l.geometry,l.material,0,0,null)):f&&f.isTexture&&(c===void 0&&(c=new ct(new Io(2,2),new rn({name:"BackgroundMaterial",uniforms:_i(Wt.background.uniforms),vertexShader:Wt.background.vertexShader,fragmentShader:Wt.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=f,f.matrixAutoUpdate===!0&&f.updateMatrix(),c.material.uniforms.uvTransform.value.copy(f.matrix),(h!==f||u!==f.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=f,u=f.version,d=s.toneMapping),x.unshift(c,c.geometry,c.material,0,0,null))}function g(x,_){t.buffers.color.setClear(x.r,x.g,x.b,_,r)}return{getClearColor:function(){return o},setClearColor:function(x,_=1){o.set(x),a=_,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,g(o,a)},render:p}}function Jf(s,e,t,n){let i=s.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=x(null),l=c;function h(I,N,B,F,U){let j=!1;if(o){let he=g(F,B,N);l!==he&&(l=he,d(l.object)),j=_(F,U),j&&m(F,U)}else{let he=N.wireframe===!0;(l.geometry!==F.id||l.program!==B.id||l.wireframe!==he)&&(l.geometry=F.id,l.program=B.id,l.wireframe=he,j=!0)}I.isInstancedMesh===!0&&(j=!0),U!==null&&t.update(U,34963),j&&(L(I,N,B,F),U!==null&&s.bindBuffer(34963,t.get(U).buffer))}function u(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function d(I){return n.isWebGL2?s.bindVertexArray(I):r.bindVertexArrayOES(I)}function p(I){return n.isWebGL2?s.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function g(I,N,B){let F=B.wireframe===!0,U=a[I.id];U===void 0&&(U={},a[I.id]=U);let j=U[N.id];j===void 0&&(j={},U[N.id]=j);let he=j[F];return he===void 0&&(he=x(u()),j[F]=he),he}function x(I){let N=[],B=[],F=[];for(let U=0;U<i;U++)N[U]=0,B[U]=0,F[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:B,attributeDivisors:F,object:I,attributes:{},index:null}}function _(I,N){let B=l.attributes,F=I.attributes,U=0;for(let j in F){let he=B[j],k=F[j];if(he===void 0||he.attribute!==k||he.data!==k.data)return!0;U++}return l.attributesNum!==U||l.index!==N}function m(I,N){let B={},F=I.attributes,U=0;for(let j in F){let he=F[j],k={};k.attribute=he,he.data&&(k.data=he.data),B[j]=k,U++}l.attributes=B,l.attributesNum=U,l.index=N}function f(){let I=l.newAttributes;for(let N=0,B=I.length;N<B;N++)I[N]=0}function T(I){M(I,0)}function M(I,N){let B=l.newAttributes,F=l.enabledAttributes,U=l.attributeDivisors;B[I]=1,F[I]===0&&(s.enableVertexAttribArray(I),F[I]=1),U[I]!==N&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,N),U[I]=N)}function E(){let I=l.newAttributes,N=l.enabledAttributes;for(let B=0,F=N.length;B<F;B++)N[B]!==I[B]&&(s.disableVertexAttribArray(B),N[B]=0)}function R(I,N,B,F,U,j){n.isWebGL2===!0&&(B===5124||B===5125)?s.vertexAttribIPointer(I,N,B,U,j):s.vertexAttribPointer(I,N,B,F,U,j)}function L(I,N,B,F){if(n.isWebGL2===!1&&(I.isInstancedMesh||F.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;f();let U=F.attributes,j=B.getAttributes(),he=N.defaultAttributeValues;for(let k in j){let Y=j[k];if(Y.location>=0){let re=U[k];if(re===void 0&&(k==="instanceMatrix"&&I.instanceMatrix&&(re=I.instanceMatrix),k==="instanceColor"&&I.instanceColor&&(re=I.instanceColor)),re!==void 0){let fe=re.normalized,_e=re.itemSize,H=t.get(re);if(H===void 0)continue;let Ne=H.buffer,ve=H.type,we=H.bytesPerElement;if(re.isInterleavedBufferAttribute){let de=re.data,Ce=de.stride,Ee=re.offset;if(de&&de.isInstancedInterleavedBuffer){for(let X=0;X<Y.locationSize;X++)M(Y.location+X,de.meshPerAttribute);I.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let X=0;X<Y.locationSize;X++)T(Y.location+X);s.bindBuffer(34962,Ne);for(let X=0;X<Y.locationSize;X++)R(Y.location+X,_e/Y.locationSize,ve,fe,Ce*we,(Ee+_e/Y.locationSize*X)*we)}else{if(re.isInstancedBufferAttribute){for(let de=0;de<Y.locationSize;de++)M(Y.location+de,re.meshPerAttribute);I.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let de=0;de<Y.locationSize;de++)T(Y.location+de);s.bindBuffer(34962,Ne);for(let de=0;de<Y.locationSize;de++)R(Y.location+de,_e/Y.locationSize,ve,fe,_e*we,_e/Y.locationSize*de*we)}}else if(he!==void 0){let fe=he[k];if(fe!==void 0)switch(fe.length){case 2:s.vertexAttrib2fv(Y.location,fe);break;case 3:s.vertexAttrib3fv(Y.location,fe);break;case 4:s.vertexAttrib4fv(Y.location,fe);break;default:s.vertexAttrib1fv(Y.location,fe)}}}}E()}function Z(){y();for(let I in a){let N=a[I];for(let B in N){let F=N[B];for(let U in F)p(F[U].object),delete F[U];delete N[B]}delete a[I]}}function ce(I){if(a[I.id]===void 0)return;let N=a[I.id];for(let B in N){let F=N[B];for(let U in F)p(F[U].object),delete F[U];delete N[B]}delete a[I.id]}function $(I){for(let N in a){let B=a[N];if(B[I.id]===void 0)continue;let F=B[I.id];for(let U in F)p(F[U].object),delete F[U];delete B[I.id]}}function y(){C(),l!==c&&(l=c,d(l.object))}function C(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:y,resetDefaultState:C,dispose:Z,releaseStatesOfGeometry:ce,releaseStatesOfProgram:$,initAttributes:f,enableAttribute:T,disableUnusedAttributes:E}}function Zf(s,e,t,n){let i=n.isWebGL2,r;function o(l){r=l}function a(l,h){s.drawArrays(r,l,h),t.update(h,r,1)}function c(l,h,u){if(u===0)return;let d,p;if(i)d=s,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](r,l,h,u),t.update(h,r,u)}this.setMode=o,this.render=a,this.renderInstances=c}function $f(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let L=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(L){if(L==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext!="undefined"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&s instanceof WebGL2ComputeRenderingContext,a=t.precision!==void 0?t.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=s.getParameter(34930),d=s.getParameter(35660),p=s.getParameter(3379),g=s.getParameter(34076),x=s.getParameter(34921),_=s.getParameter(36347),m=s.getParameter(36348),f=s.getParameter(36349),T=d>0,M=o||e.has("OES_texture_float"),E=T&&M,R=o?s.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:_,maxVaryings:m,maxFragmentUniforms:f,vertexTextures:T,floatFragmentTextures:M,floatVertexTextures:E,maxSamples:R}}function jf(s){let e=this,t=null,n=0,i=!1,r=!1,o=new zt,a=new lt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d,p){let g=u.length!==0||d||n!==0||i;return i=d,t=h(u,p,0),n=u.length,g},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1,l()},this.setState=function(u,d,p){let g=u.clippingPlanes,x=u.clipIntersection,_=u.clipShadows,m=s.get(u);if(!i||g===null||g.length===0||r&&!_)r?h(null):l();else{let f=r?0:n,T=f*4,M=m.clippingState||null;c.value=M,M=h(g,d,T,p);for(let E=0;E!==T;++E)M[E]=t[E];m.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=f}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,g){let x=u!==null?u.length:0,_=null;if(x!==0){if(_=c.value,g!==!0||_===null){let m=p+x*4,f=d.matrixWorldInverse;a.getNormalMatrix(f),(_===null||_.length<m)&&(_=new Float32Array(m));for(let T=0,M=p;T!==x;++T,M+=4)o.copy(u[T]).applyMatrix4(f,a),o.normal.toArray(_,M),_[M+3]=o.constant}c.value=_,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,_}}function Kf(s){let e=new WeakMap;function t(o,a){return a===ji?o.mapping=Sr:a===Ao&&(o.mapping=Er),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){let a=o.mapping;if(a===ji||a===Ao)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new ps(c.height/2);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var or=class extends rr{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};or.prototype.isOrthographicCamera=!0;var bi=class extends rn{constructor(e){super(e),this.type="RawShaderMaterial"}};bi.prototype.isRawShaderMaterial=!0;var gi=4,yn=8,kt=Math.pow(2,yn),zc=[.125,.215,.35,.446,.526,.582],Oc=yn-gi+1+zc.length,ii=20,go=new or,{_lodPlanes:Oi,_sizeLods:Nl,_sigmas:qr}=Qf(),Bl=new xe,xo=null,Dn=(1+Math.sqrt(5))/2,ri=1/Dn,zl=[new S(1,1,1),new S(-1,1,1),new S(1,1,-1),new S(-1,1,-1),new S(0,Dn,ri),new S(0,Dn,-ri),new S(ri,0,Dn),new S(-ri,0,Dn),new S(Dn,ri,0),new S(-Dn,ri,0)],Si=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._blurMaterial=ep(ii),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){xo=this._renderer.getRenderTarget();let r=this._allocateTargets();return this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapShader===null&&(this._cubemapShader=Hl(),this._compileMaterial(this._cubemapShader))}compileEquirectangularShader(){this._equirectShader===null&&(this._equirectShader=Ul(),this._compileMaterial(this._equirectShader))}dispose(){this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let e=0;e<Oi.length;e++)Oi[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xo),e.scissorTest=!1,Xr(e,0,0,e.width,e.height)}_fromTexture(e,t){xo=this._renderer.getRenderTarget();let n=t||this._allocateTargets(e);return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(e){let t={magFilter:xt,minFilter:xt,generateMipmaps:!1,type:fi,format:Mt,encoding:Mn,depthBuffer:!1},n=Ol(t);return n.depthBuffer=!e,this._pingPongRenderTarget===null&&(this._pingPongRenderTarget=Ol(t)),n}_compileMaterial(e){let t=new ct(Oi[0],e);this._renderer.compile(t,go)}_sceneToCubeUV(e,t,n,i){let a=new ut(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Bl),h.toneMapping=gn,h.autoClear=!1;let p=new nr({name:"PMREM.Background",side:ot,depthWrite:!1,depthTest:!1}),g=new ct(new ir,p),x=!1,_=e.background;_?_.isColor&&(p.color.copy(_),e.background=null,x=!0):(p.color.copy(Bl),x=!0);for(let m=0;m<6;m++){let f=m%3;f===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):f===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m])),Xr(i,f*kt,m>2?kt:0,kt,kt),h.setRenderTarget(i),x&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=_}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Sr||e.mapping===Er;i?(this._cubemapShader===null&&(this._cubemapShader=Hl()),this._cubemapShader.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectShader===null&&(this._equirectShader=Ul());let r=i?this._cubemapShader:this._equirectShader,o=new ct(Oi[0],r),a=r.uniforms;a.envMap.value=e,i||a.texelSize.value.set(1/e.image.width,1/e.image.height),Xr(t,0,0,3*kt,2*kt),n.setRenderTarget(t),n.render(o,go)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<Oc;i++){let r=Math.sqrt(qr[i]*qr[i]-qr[i-1]*qr[i-1]),o=zl[(i-1)%zl.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ct(Oi[i],l),d=l.uniforms,p=Nl[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ii-1),x=r/g,_=isFinite(r)?1+Math.floor(h*x):ii;_>ii&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${ii}`);let m=[],f=0;for(let R=0;R<ii;++R){let L=R/x,Z=Math.exp(-L*L/2);m.push(Z),R===0?f+=Z:R<_&&(f+=2*Z)}for(let R=0;R<m.length;R++)m[R]=m[R]/f;d.envMap.value=e.texture,d.samples.value=_,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a),d.dTheta.value=g,d.mipInt.value=yn-n;let T=Nl[i],M=3*Math.max(0,kt-2*T),E=(i===0?0:2*kt)+2*T*(i>yn-gi?i-yn+gi:0);Xr(t,M,E,3*T,2*T),c.setRenderTarget(t),c.render(u,go)}};function Qf(){let s=[],e=[],t=[],n=yn;for(let i=0;i<Oc;i++){let r=Math.pow(2,n);e.push(r);let o=1/r;i>yn-gi?o=zc[i-yn+gi-1]:i===0&&(o=0),t.push(o);let a=1/(r-1),c=-a/2,l=1+a/2,h=[c,c,l,c,l,l,c,c,l,l,c,l],u=6,d=6,p=3,g=2,x=1,_=new Float32Array(p*d*u),m=new Float32Array(g*d*u),f=new Float32Array(x*d*u);for(let M=0;M<u;M++){let E=M%3*2/3-1,R=M>2?0:-1,L=[E,R,0,E+2/3,R,0,E+2/3,R+1,0,E,R,0,E+2/3,R+1,0,E,R+1,0];_.set(L,p*d*M),m.set(h,g*d*M);let Z=[M,M,M,M,M,M];f.set(Z,x*d*M)}let T=new je;T.setAttribute("position",new $e(_,p)),T.setAttribute("uv",new $e(m,g)),T.setAttribute("faceIndex",new $e(f,x)),s.push(T),n>gi&&n--}return{_lodPlanes:s,_sizeLods:e,_sigmas:t}}function Ol(s){let e=new St(3*kt,3*kt,s);return e.texture.mapping=Ns,e.texture.name="PMREM.cubeUv",e.scissorTest=!0,e}function Xr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function ep(s){let e=new Float32Array(s),t=new S(0,1,0);return new bi({name:"SphericalGaussianBlur",defines:{n:s},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:e},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:t}},vertexShader:ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:mn,depthTest:!1,depthWrite:!1})}function Ul(){let s=new K(1,1);return new bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:s}},vertexShader:ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			#include <common>

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec2 f = fract( uv / texelSize - 0.5 );
				uv -= f * texelSize;
				vec3 tl = texture2D ( envMap, uv ).rgb;
				uv.x += texelSize.x;
				vec3 tr = texture2D ( envMap, uv ).rgb;
				uv.y += texelSize.y;
				vec3 br = texture2D ( envMap, uv ).rgb;
				uv.x -= texelSize.x;
				vec3 bl = texture2D ( envMap, uv ).rgb;

				vec3 tm = mix( tl, tr, f.x );
				vec3 bm = mix( bl, br, f.x );
				gl_FragColor.rgb = mix( tm, bm, f.y );

			}
		`,blending:mn,depthTest:!1,depthWrite:!1})}function Hl(){return new bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mn,depthTest:!1,depthWrite:!1})}function ka(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function tp(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===ji||c===Ao,h=c===Sr||c===Er;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new Si(s)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(l&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new Si(s));let d=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function i(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function np(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function ip(s,e,t,n){let i={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];let p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)e.update(d[g],34962);let p=u.morphAttributes;for(let g in p){let x=p[g];for(let _=0,m=x.length;_<m;_++)e.update(x[_],34962)}}function l(u){let d=[],p=u.index,g=u.attributes.position,x=0;if(p!==null){let f=p.array;x=p.version;for(let T=0,M=f.length;T<M;T+=3){let E=f[T+0],R=f[T+1],L=f[T+2];d.push(E,R,R,L,L,E)}}else{let f=g.array;x=g.version;for(let T=0,M=f.length/3-1;T<M;T+=3){let E=T+0,R=T+1,L=T+2;d.push(E,R,R,L,L,E)}}let _=new(Fc(d)?fs:ds)(d,1);_.version=x;let m=r.get(u);m&&e.remove(m),r.set(u,_)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function rp(s,e,t,n){let i=n.isWebGL2,r;function o(d){r=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function h(d,p){s.drawElements(r,p,a,d*c),t.update(p,r,1)}function u(d,p,g){if(g===0)return;let x,_;if(i)x=s,_="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[_](r,p,a,d*c,g),t.update(p,r,g)}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u}function sp(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}var ar=class extends pt{constructor(e=null,t=1,n=1,i=1){super(null),this.image={data:e,width:t,height:n,depth:i},this.magFilter=at,this.minFilter=at,this.wrapR=Rt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};ar.prototype.isDataTexture2DArray=!0;function op(s,e){return s[0]-e[0]}function ap(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Gl(s,e){let t=1,n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),s.divideScalar(t)}function lp(s,e,t){let n={},i=new Float32Array(8),r=new WeakMap,o=new S,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u,d){let p=l.morphTargetInfluences;if(e.isWebGL2===!0){let g=h.morphAttributes.position.length,x=r.get(h);if(x===void 0||x.count!==g){let C=function(){$.dispose(),r.delete(h),h.removeEventListener("dispose",C)};x!==void 0&&x.texture.dispose();let f=h.morphAttributes.normal!==void 0,T=h.morphAttributes.position,M=h.morphAttributes.normal||[],E=h.attributes.position.count,R=f===!0?2:1,L=E*R,Z=1;L>e.maxTextureSize&&(Z=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);let ce=new Float32Array(L*Z*4*g),$=new ar(ce,L,Z,g);$.format=Mt,$.type=In,$.needsUpdate=!0;let y=R*4;for(let I=0;I<g;I++){let N=T[I],B=M[I],F=L*Z*4*I;for(let U=0;U<N.count;U++){o.fromBufferAttribute(N,U),N.normalized===!0&&Gl(o,N);let j=U*y;ce[F+j+0]=o.x,ce[F+j+1]=o.y,ce[F+j+2]=o.z,ce[F+j+3]=0,f===!0&&(o.fromBufferAttribute(B,U),B.normalized===!0&&Gl(o,B),ce[F+j+4]=o.x,ce[F+j+5]=o.y,ce[F+j+6]=o.z,ce[F+j+7]=0)}}x={count:g,texture:$,size:new K(L,Z)},r.set(h,x),h.addEventListener("dispose",C)}let _=0;for(let f=0;f<p.length;f++)_+=p[f];let m=h.morphTargetsRelative?1:1-_;d.getUniforms().setValue(s,"morphTargetBaseInfluence",m),d.getUniforms().setValue(s,"morphTargetInfluences",p),d.getUniforms().setValue(s,"morphTargetsTexture",x.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}else{let g=p===void 0?0:p.length,x=n[h.id];if(x===void 0||x.length!==g){x=[];for(let M=0;M<g;M++)x[M]=[M,0];n[h.id]=x}for(let M=0;M<g;M++){let E=x[M];E[0]=M,E[1]=p[M]}x.sort(ap);for(let M=0;M<8;M++)M<g&&x[M][1]?(a[M][0]=x[M][0],a[M][1]=x[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(op);let _=h.morphAttributes.position,m=h.morphAttributes.normal,f=0;for(let M=0;M<8;M++){let E=a[M],R=E[0],L=E[1];R!==Number.MAX_SAFE_INTEGER&&L?(_&&h.getAttribute("morphTarget"+M)!==_[R]&&h.setAttribute("morphTarget"+M,_[R]),m&&h.getAttribute("morphNormal"+M)!==m[R]&&h.setAttribute("morphNormal"+M,m[R]),i[M]=L,f+=L):(_&&h.hasAttribute("morphTarget"+M)===!0&&h.deleteAttribute("morphTarget"+M),m&&h.hasAttribute("morphNormal"+M)===!0&&h.deleteAttribute("morphNormal"+M),i[M]=0)}let T=h.morphTargetsRelative?1:1-f;d.getUniforms().setValue(s,"morphTargetBaseInfluence",T),d.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function cp(s,e,t,n){let i=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);return i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),u}function o(){i=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var ms=class extends pt{constructor(e=null,t=1,n=1,i=1){super(null),this.image={data:e,width:t,height:n,depth:i},this.magFilter=at,this.minFilter=at,this.wrapR=Rt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};ms.prototype.isDataTexture3D=!0;var Uc=new pt,Hc=new ar,Gc=new ms,Vc=new Mi,Vl=[],kl=[],Wl=new Float32Array(16),ql=new Float32Array(9),Xl=new Float32Array(4);function Di(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Vl[i];if(r===void 0&&(r=new Float32Array(i),Vl[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function wt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function _t(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function zs(s,e){let t=kl[e];t===void 0&&(t=new Int32Array(e),kl[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function hp(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function up(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;s.uniform2fv(this.addr,e),_t(t,e)}}function dp(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;s.uniform3fv(this.addr,e),_t(t,e)}}function fp(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;s.uniform4fv(this.addr,e),_t(t,e)}}function pp(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(wt(t,n))return;Xl.set(n),s.uniformMatrix2fv(this.addr,!1,Xl),_t(t,n)}}function mp(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(wt(t,n))return;ql.set(n),s.uniformMatrix3fv(this.addr,!1,ql),_t(t,n)}}function gp(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(wt(t,n))return;Wl.set(n),s.uniformMatrix4fv(this.addr,!1,Wl),_t(t,n)}}function xp(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function yp(s,e){let t=this.cache;wt(t,e)||(s.uniform2iv(this.addr,e),_t(t,e))}function vp(s,e){let t=this.cache;wt(t,e)||(s.uniform3iv(this.addr,e),_t(t,e))}function _p(s,e){let t=this.cache;wt(t,e)||(s.uniform4iv(this.addr,e),_t(t,e))}function Mp(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function wp(s,e){let t=this.cache;wt(t,e)||(s.uniform2uiv(this.addr,e),_t(t,e))}function bp(s,e){let t=this.cache;wt(t,e)||(s.uniform3uiv(this.addr,e),_t(t,e))}function Sp(s,e){let t=this.cache;wt(t,e)||(s.uniform4uiv(this.addr,e),_t(t,e))}function Ep(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.safeSetTexture2D(e||Uc,i)}function Tp(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Gc,i)}function Ap(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.safeSetTextureCube(e||Vc,i)}function Rp(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Hc,i)}function Cp(s){switch(s){case 5126:return hp;case 35664:return up;case 35665:return dp;case 35666:return fp;case 35674:return pp;case 35675:return mp;case 35676:return gp;case 5124:case 35670:return xp;case 35667:case 35671:return yp;case 35668:case 35672:return vp;case 35669:case 35673:return _p;case 5125:return Mp;case 36294:return wp;case 36295:return bp;case 36296:return Sp;case 35678:case 36198:case 36298:case 36306:case 35682:return Ep;case 35679:case 36299:case 36307:return Tp;case 35680:case 36300:case 36308:case 36293:return Ap;case 36289:case 36303:case 36311:case 36292:return Rp}}function Lp(s,e){s.uniform1fv(this.addr,e)}function Pp(s,e){let t=Di(e,this.size,2);s.uniform2fv(this.addr,t)}function Dp(s,e){let t=Di(e,this.size,3);s.uniform3fv(this.addr,t)}function Ip(s,e){let t=Di(e,this.size,4);s.uniform4fv(this.addr,t)}function Fp(s,e){let t=Di(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Np(s,e){let t=Di(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Bp(s,e){let t=Di(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function zp(s,e){s.uniform1iv(this.addr,e)}function Op(s,e){s.uniform2iv(this.addr,e)}function Up(s,e){s.uniform3iv(this.addr,e)}function Hp(s,e){s.uniform4iv(this.addr,e)}function Gp(s,e){s.uniform1uiv(this.addr,e)}function Vp(s,e){s.uniform2uiv(this.addr,e)}function kp(s,e){s.uniform3uiv(this.addr,e)}function Wp(s,e){s.uniform4uiv(this.addr,e)}function qp(s,e,t){let n=e.length,i=zs(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.safeSetTexture2D(e[r]||Uc,i[r])}function Xp(s,e,t){let n=e.length,i=zs(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture3D(e[r]||Gc,i[r])}function Yp(s,e,t){let n=e.length,i=zs(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.safeSetTextureCube(e[r]||Vc,i[r])}function Jp(s,e,t){let n=e.length,i=zs(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture2DArray(e[r]||Hc,i[r])}function Zp(s){switch(s){case 5126:return Lp;case 35664:return Pp;case 35665:return Dp;case 35666:return Ip;case 35674:return Fp;case 35675:return Np;case 35676:return Bp;case 5124:case 35670:return zp;case 35667:case 35671:return Op;case 35668:case 35672:return Up;case 35669:case 35673:return Hp;case 5125:return Gp;case 36294:return Vp;case 36295:return kp;case 36296:return Wp;case 35678:case 36198:case 36298:case 36306:case 35682:return qp;case 35679:case 36299:case 36307:return Xp;case 35680:case 36300:case 36308:case 36293:return Yp;case 36289:case 36303:case 36311:case 36292:return Jp}}function $p(s,e,t){this.id=s,this.addr=t,this.cache=[],this.setValue=Cp(e.type)}function kc(s,e,t){this.id=s,this.addr=t,this.cache=[],this.size=e.size,this.setValue=Zp(e.type)}kc.prototype.updateCache=function(s){let e=this.cache;s instanceof Float32Array&&e.length!==s.length&&(this.cache=new Float32Array(s.length)),_t(e,s)};function Wc(s){this.id=s,this.seq=[],this.map={}}Wc.prototype.setValue=function(s,e,t){let n=this.seq;for(let i=0,r=n.length;i!==r;++i){let o=n[i];o.setValue(s,e[o.id],t)}};var yo=/(\w+)(\])?(\[|\.)?/g;function Yl(s,e){s.seq.push(e),s.map[e.id]=e}function jp(s,e,t){let n=s.name,i=n.length;for(yo.lastIndex=0;;){let r=yo.exec(n),o=yo.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Yl(t,l===void 0?new $p(a,s,e):new kc(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new Wc(a),Yl(t,u)),t=u}}}function vn(s,e){this.seq=[],this.map={};let t=s.getProgramParameter(e,35718);for(let n=0;n<t;++n){let i=s.getActiveUniform(e,n),r=s.getUniformLocation(e,i.name);jp(i,r,this)}}vn.prototype.setValue=function(s,e,t,n){let i=this.map[e];i!==void 0&&i.setValue(s,t,n)};vn.prototype.setOptional=function(s,e,t){let n=e[t];n!==void 0&&this.setValue(s,t,n)};vn.upload=function(s,e,t,n){for(let i=0,r=e.length;i!==r;++i){let o=e[i],a=t[o.id];a.needsUpdate!==!1&&o.setValue(s,a.value,n)}};vn.seqWithValue=function(s,e){let t=[];for(let n=0,i=s.length;n!==i;++n){let r=s[n];r.id in e&&t.push(r)}return t};function Jl(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var Kp=0;function Qp(s){let e=s.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function em(s){switch(s){case Mn:return["Linear","( value )"];case qe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function Zl(s,e,t){let n=s.getShaderParameter(e,35713),i=s.getShaderInfoLog(e).trim();return n&&i===""?"":t.toUpperCase()+`

`+i+`

`+Qp(s.getShaderSource(e))}function tm(s,e){let t=em(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function nm(s,e){let t;switch(e){case Ah:t="Linear";break;case Rh:t="Reinhard";break;case Ch:t="OptimizedCineon";break;case Ha:t="ACESFilmic";break;case Lh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function im(s){return[s.extensionDerivatives||s.envMapCubeUV||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(qi).join(`
`)}function rm(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function sm(s,e){let t={},n=s.getProgramParameter(e,35721);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function qi(s){return s!==""}function $l(s,e){return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jl(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var om=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fo(s){return s.replace(om,am)}function am(s,e){let t=Fe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Fo(t)}var lm=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,cm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kl(s){return s.replace(cm,qc).replace(lm,hm)}function hm(s,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),qc(s,e,t,n)}function qc(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ql(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function um(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Rc?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===sh?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Wi&&(e="SHADOWMAP_TYPE_VSM"),e}function dm(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Sr:case Er:e="ENVMAP_TYPE_CUBE";break;case Ns:case Ga:e="ENVMAP_TYPE_CUBE_UV";break}return e}function fm(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Er:case Ga:e="ENVMAP_MODE_REFRACTION";break}return e}function pm(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Fs:e="ENVMAP_BLENDING_MULTIPLY";break;case Eh:e="ENVMAP_BLENDING_MIX";break;case Th:e="ENVMAP_BLENDING_ADD";break}return e}function mm(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=um(t),l=dm(t),h=fm(t),u=pm(t),d=t.isWebGL2?"":im(t),p=rm(r),g=i.createProgram(),x,_,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=[p].filter(qi).join(`
`),x.length>0&&(x+=`
`),_=[d,p].filter(qi).join(`
`),_.length>0&&(_+=`
`)):(x=[Ql(t),"#define SHADER_NAME "+t.shaderName,p,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qi).join(`
`),_=[d,Ql(t),"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gn?"#define TONE_MAPPING":"",t.toneMapping!==gn?Fe.tonemapping_pars_fragment:"",t.toneMapping!==gn?nm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.transparent?"":"#define OPAQUE",Fe.encodings_pars_fragment,tm("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qi).join(`
`)),o=Fo(o),o=$l(o,t),o=jl(o,t),a=Fo(a),a=$l(a,t),a=jl(a,t),o=Kl(o),a=Kl(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,x=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,_=["#define varying in",t.glslVersion===wl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let f=m+x+o,T=m+_+a,M=Jl(i,35633,f),E=Jl(i,35632,T);if(i.attachShader(g,M),i.attachShader(g,E),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g),s.debug.checkShaderErrors){let Z=i.getProgramInfoLog(g).trim(),ce=i.getShaderInfoLog(M).trim(),$=i.getShaderInfoLog(E).trim(),y=!0,C=!0;if(i.getProgramParameter(g,35714)===!1){y=!1;let I=Zl(i,M,"vertex"),N=Zl(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,35715)+`

Program Info Log: `+Z+`
`+I+`
`+N)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(ce===""||$==="")&&(C=!1);C&&(this.diagnostics={runnable:y,programLog:Z,vertexShader:{log:ce,prefix:x},fragmentShader:{log:$,prefix:_}})}i.deleteShader(M),i.deleteShader(E);let R;this.getUniforms=function(){return R===void 0&&(R=new vn(i,g)),R};let L;return this.getAttributes=function(){return L===void 0&&(L=sm(i,g)),L},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.name=t.shaderName,this.id=Kp++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=E,this}var gm=0,No=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){let t=this.shaderCache;if(t.has(e)===!1){let n=new Bo;t.set(e,n)}return t.get(e)}},Bo=class{constructor(){this.id=gm++,this.usedTimes=0}};function xm(s,e,t,n,i,r,o){let a=new us,c=new No,l=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.floatVertexTextures,p=i.maxVertexUniforms,g=i.vertexTextures,x=i.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){let I=y.skeleton.bones;if(d)return 1024;{let B=Math.floor((p-20)/4),F=Math.min(B,I.length);return F<I.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+I.length+" bones. This GPU supports "+F+"."),0):F}}function f(y,C,I,N,B){let F=N.fog,U=y.isMeshStandardMaterial?N.environment:null,j=(y.isMeshStandardMaterial?t:e).get(y.envMap||U),he=_[y.type],k=B.isSkinnedMesh?m(B):0;y.precision!==null&&(x=i.getMaxPrecision(y.precision),x!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",x,"instead."));let Y,re,fe,_e;if(he){let de=Wt[he];Y=de.vertexShader,re=de.fragmentShader}else Y=y.vertexShader,re=y.fragmentShader,c.update(y),fe=c.getVertexShaderID(y),_e=c.getFragmentShaderID(y);let H=s.getRenderTarget(),Ne=y.alphaTest>0,ve=y.clearcoat>0;return{isWebGL2:h,shaderID:he,shaderName:y.type,vertexShader:Y,fragmentShader:re,defines:y.defines,customVertexShaderID:fe,customFragmentShaderID:_e,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:x,instancing:B.isInstancedMesh===!0,instancingColor:B.isInstancedMesh===!0&&B.instanceColor!==null,supportsVertexTextures:g,outputEncoding:H===null?s.outputEncoding:H.isXRRenderTarget===!0?H.texture.encoding:Mn,map:!!y.map,matcap:!!y.matcap,envMap:!!j,envMapMode:j&&j.mapping,envMapCubeUV:!!j&&(j.mapping===Ns||j.mapping===Ga),lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===Qh,tangentSpaceNormalMap:y.normalMapType===Pi,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===qe,clearcoat:ve,clearcoatMap:ve&&!!y.clearcoatMap,clearcoatRoughnessMap:ve&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:ve&&!!y.clearcoatNormalMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,transparent:y.transparent,alphaMap:!!y.alphaMap,alphaTest:Ne,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!B.geometry&&!!B.geometry.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!B.geometry&&!!B.geometry.attributes.color&&B.geometry.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(y.map||y.bumpMap||y.normalMap||y.specularMap||y.alphaMap||y.emissiveMap||y.roughnessMap||y.metalnessMap||y.clearcoatNormalMap||y.transmission>0||y.transmissionMap||y.thicknessMap||y.specularIntensityMap||y.specularColorMap||y.sheen>0||y.sheenColorMap||y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!F,useFog:y.fog,fogExp2:F&&F.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:u,skinning:B.isSkinnedMesh===!0&&k>0,maxBones:k,useVertexTexture:d,morphTargets:!!B.geometry&&!!B.geometry.morphAttributes.position,morphNormals:!!B.geometry&&!!B.geometry.morphAttributes.normal,morphTargetsCount:B.geometry&&B.geometry.morphAttributes.position?B.geometry.morphAttributes.position.length:0,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:y.toneMapped?s.toneMapping:gn,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===xi,flipSided:y.side===ot,depthPacking:y.depthPacking!==void 0?y.depthPacking:!1,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function T(y){let C=[];if(y.shaderID?C.push(y.shaderID):(C.push(y.customVertexShaderID),C.push(y.customFragmentShaderID)),y.defines!==void 0)for(let I in y.defines)C.push(I),C.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(M(C,y),E(C,y),C.push(s.outputEncoding)),C.push(y.customProgramCacheKey),C.join()}function M(y,C){y.push(C.precision),y.push(C.outputEncoding),y.push(C.envMapMode),y.push(C.combine),y.push(C.vertexUvs),y.push(C.fogExp2),y.push(C.sizeAttenuation),y.push(C.maxBones),y.push(C.morphTargetsCount),y.push(C.numDirLights),y.push(C.numPointLights),y.push(C.numSpotLights),y.push(C.numHemiLights),y.push(C.numRectAreaLights),y.push(C.numDirLightShadows),y.push(C.numPointLightShadows),y.push(C.numSpotLightShadows),y.push(C.shadowMapType),y.push(C.toneMapping),y.push(C.numClippingPlanes),y.push(C.numClipIntersection)}function E(y,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.map&&a.enable(4),C.matcap&&a.enable(5),C.envMap&&a.enable(6),C.envMapCubeUV&&a.enable(7),C.lightMap&&a.enable(8),C.aoMap&&a.enable(9),C.emissiveMap&&a.enable(10),C.bumpMap&&a.enable(11),C.normalMap&&a.enable(12),C.objectSpaceNormalMap&&a.enable(13),C.tangentSpaceNormalMap&&a.enable(14),C.clearcoat&&a.enable(15),C.clearcoatMap&&a.enable(16),C.clearcoatRoughnessMap&&a.enable(17),C.clearcoatNormalMap&&a.enable(18),C.displacementMap&&a.enable(19),C.specularMap&&a.enable(20),C.roughnessMap&&a.enable(21),C.metalnessMap&&a.enable(22),C.gradientMap&&a.enable(23),C.alphaMap&&a.enable(24),C.alphaTest&&a.enable(25),C.vertexColors&&a.enable(26),C.vertexAlphas&&a.enable(27),C.vertexUvs&&a.enable(28),C.vertexTangents&&a.enable(29),C.uvsVertexOnly&&a.enable(30),C.fog&&a.enable(31),y.push(a.mask),a.disableAll(),C.useFog&&a.enable(0),C.flatShading&&a.enable(1),C.logarithmicDepthBuffer&&a.enable(2),C.skinning&&a.enable(3),C.useVertexTexture&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.premultipliedAlpha&&a.enable(7),C.shadowMapEnabled&&a.enable(8),C.physicallyCorrectLights&&a.enable(9),C.doubleSided&&a.enable(10),C.flipSided&&a.enable(11),C.depthPacking&&a.enable(12),C.dithering&&a.enable(13),C.specularIntensityMap&&a.enable(14),C.specularColorMap&&a.enable(15),C.transmission&&a.enable(16),C.transmissionMap&&a.enable(17),C.thicknessMap&&a.enable(18),C.sheen&&a.enable(19),C.sheenColorMap&&a.enable(20),C.sheenRoughnessMap&&a.enable(21),C.decodeVideoTexture&&a.enable(22),C.transparent&&a.enable(23),y.push(a.mask)}function R(y){let C=_[y.type],I;if(C){let N=Wt[C];I=pu.clone(N.uniforms)}else I=y.uniforms;return I}function L(y,C){let I;for(let N=0,B=l.length;N<B;N++){let F=l[N];if(F.cacheKey===C){I=F,++I.usedTimes;break}}return I===void 0&&(I=new mm(s,C,y,r),l.push(I)),I}function Z(y){if(--y.usedTimes===0){let C=l.indexOf(y);l[C]=l[l.length-1],l.pop(),y.destroy()}}function ce(y){c.remove(y)}function $(){c.dispose()}return{getParameters:f,getProgramCacheKey:T,getUniforms:R,acquireProgram:L,releaseProgram:Z,releaseShaderCache:ce,programs:l,dispose:$}}function ym(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function vm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function ec(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function tc(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,p,g,x,_){let m=s[e];return m===void 0?(m={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:x,group:_},s[e]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=p,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=x,m.group=_),e++,m}function a(u,d,p,g,x,_){let m=o(u,d,p,g,x,_);p.transmission>0?n.push(m):p.transparent===!0?i.push(m):t.push(m)}function c(u,d,p,g,x,_){let m=o(u,d,p,g,x,_);p.transmission>0?n.unshift(m):p.transparent===!0?i.unshift(m):t.unshift(m)}function l(u,d){t.length>1&&t.sort(u||vm),n.length>1&&n.sort(d||ec),i.length>1&&i.sort(d||ec)}function h(){for(let u=e,d=s.length;u<d;u++){let p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function _m(){let s=new WeakMap;function e(n,i){let r;return s.has(n)===!1?(r=new tc,s.set(n,[r])):i>=s.get(n).length?(r=new tc,s.get(n).push(r)):r=s.get(n)[i],r}function t(){s=new WeakMap}return{get:e,dispose:t}}function Mm(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new S,color:new xe};break;case"SpotLight":t={position:new S,direction:new S,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new S,color:new xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new S,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":t={color:new xe,position:new S,halfWidth:new S,halfHeight:new S};break}return s[e.id]=t,t}}}function wm(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var bm=0;function Sm(s,e){return(e.castShadow?1:0)-(s.castShadow?1:0)}function Em(s,e){let t=new Mm,n=wm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let h=0;h<9;h++)i.probe.push(new S);let r=new S,o=new be,a=new be;function c(h,u){let d=0,p=0,g=0;for(let ce=0;ce<9;ce++)i.probe[ce].set(0,0,0);let x=0,_=0,m=0,f=0,T=0,M=0,E=0,R=0;h.sort(Sm);let L=u!==!0?Math.PI:1;for(let ce=0,$=h.length;ce<$;ce++){let y=h[ce],C=y.color,I=y.intensity,N=y.distance,B=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)d+=C.r*I*L,p+=C.g*I*L,g+=C.b*I*L;else if(y.isLightProbe)for(let F=0;F<9;F++)i.probe[F].addScaledVector(y.sh.coefficients[F],I);else if(y.isDirectionalLight){let F=t.get(y);if(F.color.copy(y.color).multiplyScalar(y.intensity*L),y.castShadow){let U=y.shadow,j=n.get(y);j.shadowBias=U.bias,j.shadowNormalBias=U.normalBias,j.shadowRadius=U.radius,j.shadowMapSize=U.mapSize,i.directionalShadow[x]=j,i.directionalShadowMap[x]=B,i.directionalShadowMatrix[x]=y.shadow.matrix,M++}i.directional[x]=F,x++}else if(y.isSpotLight){let F=t.get(y);if(F.position.setFromMatrixPosition(y.matrixWorld),F.color.copy(C).multiplyScalar(I*L),F.distance=N,F.coneCos=Math.cos(y.angle),F.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),F.decay=y.decay,y.castShadow){let U=y.shadow,j=n.get(y);j.shadowBias=U.bias,j.shadowNormalBias=U.normalBias,j.shadowRadius=U.radius,j.shadowMapSize=U.mapSize,i.spotShadow[m]=j,i.spotShadowMap[m]=B,i.spotShadowMatrix[m]=y.shadow.matrix,R++}i.spot[m]=F,m++}else if(y.isRectAreaLight){let F=t.get(y);F.color.copy(C).multiplyScalar(I),F.halfWidth.set(y.width*.5,0,0),F.halfHeight.set(0,y.height*.5,0),i.rectArea[f]=F,f++}else if(y.isPointLight){let F=t.get(y);if(F.color.copy(y.color).multiplyScalar(y.intensity*L),F.distance=y.distance,F.decay=y.decay,y.castShadow){let U=y.shadow,j=n.get(y);j.shadowBias=U.bias,j.shadowNormalBias=U.normalBias,j.shadowRadius=U.radius,j.shadowMapSize=U.mapSize,j.shadowCameraNear=U.camera.near,j.shadowCameraFar=U.camera.far,i.pointShadow[_]=j,i.pointShadowMap[_]=B,i.pointShadowMatrix[_]=y.shadow.matrix,E++}i.point[_]=F,_++}else if(y.isHemisphereLight){let F=t.get(y);F.skyColor.copy(y.color).multiplyScalar(I*L),F.groundColor.copy(y.groundColor).multiplyScalar(I*L),i.hemi[T]=F,T++}}f>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=se.LTC_FLOAT_1,i.rectAreaLTC2=se.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=se.LTC_HALF_1,i.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=g;let Z=i.hash;(Z.directionalLength!==x||Z.pointLength!==_||Z.spotLength!==m||Z.rectAreaLength!==f||Z.hemiLength!==T||Z.numDirectionalShadows!==M||Z.numPointShadows!==E||Z.numSpotShadows!==R)&&(i.directional.length=x,i.spot.length=m,i.rectArea.length=f,i.point.length=_,i.hemi.length=T,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=E,i.spotShadowMatrix.length=R,Z.directionalLength=x,Z.pointLength=_,Z.spotLength=m,Z.rectAreaLength=f,Z.hemiLength=T,Z.numDirectionalShadows=M,Z.numPointShadows=E,Z.numSpotShadows=R,i.version=bm++)}function l(h,u){let d=0,p=0,g=0,x=0,_=0,m=u.matrixWorldInverse;for(let f=0,T=h.length;f<T;f++){let M=h[f];if(M.isDirectionalLight){let E=i.directional[d];E.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),d++}else if(M.isSpotLight){let E=i.spot[g];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),g++}else if(M.isRectAreaLight){let E=i.rectArea[x];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),a.identity(),o.copy(M.matrixWorld),o.premultiply(m),a.extractRotation(o),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),x++}else if(M.isPointLight){let E=i.point[p];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),p++}else if(M.isHemisphereLight){let E=i.hemi[_];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(m),E.direction.normalize(),_++}}}return{setup:c,setupView:l,state:i}}function nc(s,e){let t=new Em(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function c(u){t.setup(n,u)}function l(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Tm(s,e){let t=new WeakMap;function n(r,o=0){let a;return t.has(r)===!1?(a=new nc(s,e),t.set(r,[a])):o>=t.get(r).length?(a=new nc(s,e),t.get(r).push(a)):a=t.get(r)[o],a}function i(){t=new WeakMap}return{get:n,dispose:i}}var gs=class extends dt{constructor(e){super(),this.type="MeshDepthMaterial",this.depthPacking=jh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};gs.prototype.isMeshDepthMaterial=!0;var xs=class extends dt{constructor(e){super(),this.type="MeshDistanceMaterial",this.referencePosition=new S,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};xs.prototype.isMeshDistanceMaterial=!0;var Am=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Xc(s,e,t){let n=new wi,i=new K,r=new K,o=new We,a=new gs({depthPacking:Kh}),c=new xs,l={},h=t.maxTextureSize,u={0:ot,1:$i,2:xi},d=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new K},radius:{value:4}},vertexShader:Am,fragmentShader:Rm}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new je;g.setAttribute("position",new $e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ct(g,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rc,this.render=function(M,E,R){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||M.length===0)return;let L=s.getRenderTarget(),Z=s.getActiveCubeFace(),ce=s.getActiveMipmapLevel(),$=s.state;$.setBlending(mn),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);for(let y=0,C=M.length;y<C;y++){let I=M[y],N=I.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",I,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;i.copy(N.mapSize);let B=N.getFrameExtents();if(i.multiply(B),r.copy(N.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/B.x),i.x=r.x*B.x,N.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/B.y),i.y=r.y*B.y,N.mapSize.y=r.y)),N.map===null&&!N.isPointLightShadow&&this.type===Wi){let U={minFilter:xt,magFilter:xt,format:Mt};N.map=new St(i.x,i.y,U),N.map.texture.name=I.name+".shadowMap",N.mapPass=new St(i.x,i.y,U),N.camera.updateProjectionMatrix()}if(N.map===null){let U={minFilter:at,magFilter:at,format:Mt};N.map=new St(i.x,i.y,U),N.map.texture.name=I.name+".shadowMap",N.camera.updateProjectionMatrix()}s.setRenderTarget(N.map),s.clear();let F=N.getViewportCount();for(let U=0;U<F;U++){let j=N.getViewport(U);o.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),$.viewport(o),N.updateMatrices(I,U),n=N.getFrustum(),T(E,R,N.camera,I,this.type)}!N.isPointLightShadow&&this.type===Wi&&m(N,R),N.needsUpdate=!1}_.needsUpdate=!1,s.setRenderTarget(L,Z,ce)};function m(M,E){let R=e.update(x);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,s.setRenderTarget(M.mapPass),s.clear(),s.renderBufferDirect(E,null,R,d,x,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,s.setRenderTarget(M.map),s.clear(),s.renderBufferDirect(E,null,R,p,x,null)}function f(M,E,R,L,Z,ce,$){let y=null,C=L.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(C!==void 0?y=C:y=L.isPointLight===!0?c:a,s.localClippingEnabled&&R.clipShadows===!0&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0){let I=y.uuid,N=R.uuid,B=l[I];B===void 0&&(B={},l[I]=B);let F=B[N];F===void 0&&(F=y.clone(),B[N]=F),y=F}return y.visible=R.visible,y.wireframe=R.wireframe,$===Wi?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:u[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaTest,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,L.isPointLight===!0&&y.isMeshDistanceMaterial===!0&&(y.referencePosition.setFromMatrixPosition(L.matrixWorld),y.nearDistance=Z,y.farDistance=ce),y}function T(M,E,R,L,Z){if(M.visible===!1)return;if(M.layers.test(E.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&Z===Wi)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,M.matrixWorld);let y=e.update(M),C=M.material;if(Array.isArray(C)){let I=y.groups;for(let N=0,B=I.length;N<B;N++){let F=I[N],U=C[F.materialIndex];if(U&&U.visible){let j=f(M,y,U,L,R.near,R.far,Z);s.renderBufferDirect(R,null,y,j,M,F)}}}else if(C.visible){let I=f(M,y,C,L,R.near,R.far,Z);s.renderBufferDirect(R,null,y,I,M,null)}}let $=M.children;for(let y=0,C=$.length;y<C;y++)T($[y],E,R,L,Z)}}function Cm(s,e,t){let n=t.isWebGL2;function i(){let A=!1,G=new We,q=null,ee=new We(0,0,0,0);return{setMask:function(D){q!==D&&!A&&(s.colorMask(D,D,D,D),q=D)},setLocked:function(D){A=D},setClear:function(D,Q,ge,Le,Ke){Ke===!0&&(D*=Le,Q*=Le,ge*=Le),G.set(D,Q,ge,Le),ee.equals(G)===!1&&(s.clearColor(D,Q,ge,Le),ee.copy(G))},reset:function(){A=!1,q=null,ee.set(-1,0,0,0)}}}function r(){let A=!1,G=null,q=null,ee=null;return{setTest:function(D){D?H(2929):Ne(2929)},setMask:function(D){G!==D&&!A&&(s.depthMask(D),G=D)},setFunc:function(D){if(q!==D){if(D)switch(D){case yh:s.depthFunc(512);break;case vh:s.depthFunc(519);break;case _h:s.depthFunc(513);break;case To:s.depthFunc(515);break;case Mh:s.depthFunc(514);break;case wh:s.depthFunc(518);break;case bh:s.depthFunc(516);break;case Sh:s.depthFunc(517);break;default:s.depthFunc(515)}else s.depthFunc(515);q=D}},setLocked:function(D){A=D},setClear:function(D){ee!==D&&(s.clearDepth(D),ee=D)},reset:function(){A=!1,G=null,q=null,ee=null}}}function o(){let A=!1,G=null,q=null,ee=null,D=null,Q=null,ge=null,Le=null,Ke=null;return{setTest:function(Be){A||(Be?H(2960):Ne(2960))},setMask:function(Be){G!==Be&&!A&&(s.stencilMask(Be),G=Be)},setFunc:function(Be,Qe,it){(q!==Be||ee!==Qe||D!==it)&&(s.stencilFunc(Be,Qe,it),q=Be,ee=Qe,D=it)},setOp:function(Be,Qe,it){(Q!==Be||ge!==Qe||Le!==it)&&(s.stencilOp(Be,Qe,it),Q=Be,ge=Qe,Le=it)},setLocked:function(Be){A=Be},setClear:function(Be){Ke!==Be&&(s.clearStencil(Be),Ke=Be)},reset:function(){A=!1,G=null,q=null,ee=null,D=null,Q=null,ge=null,Le=null,Ke=null}}}let a=new i,c=new r,l=new o,h={},u={},d=new WeakMap,p=[],g=null,x=!1,_=null,m=null,f=null,T=null,M=null,E=null,R=null,L=!1,Z=null,ce=null,$=null,y=null,C=null,I=s.getParameter(35661),N=!1,B=0,F=s.getParameter(7938);F.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(F)[1]),N=B>=1):F.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),N=B>=2);let U=null,j={},he=s.getParameter(3088),k=s.getParameter(2978),Y=new We().fromArray(he),re=new We().fromArray(k);function fe(A,G,q){let ee=new Uint8Array(4),D=s.createTexture();s.bindTexture(A,D),s.texParameteri(A,10241,9728),s.texParameteri(A,10240,9728);for(let Q=0;Q<q;Q++)s.texImage2D(G+Q,0,6408,1,1,0,6408,5121,ee);return D}let _e={};_e[3553]=fe(3553,3553,1),_e[34067]=fe(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),H(2929),c.setFunc(To),te(!1),ue(Ya),H(2884),X(mn);function H(A){h[A]!==!0&&(s.enable(A),h[A]=!0)}function Ne(A){h[A]!==!1&&(s.disable(A),h[A]=!1)}function ve(A,G){return u[A]!==G?(s.bindFramebuffer(A,G),u[A]=G,n&&(A===36009&&(u[36160]=G),A===36160&&(u[36009]=G)),!0):!1}function we(A,G){let q=p,ee=!1;if(A)if(q=d.get(G),q===void 0&&(q=[],d.set(G,q)),A.isWebGLMultipleRenderTargets){let D=A.texture;if(q.length!==D.length||q[0]!==36064){for(let Q=0,ge=D.length;Q<ge;Q++)q[Q]=36064+Q;q.length=D.length,ee=!0}}else q[0]!==36064&&(q[0]=36064,ee=!0);else q[0]!==1029&&(q[0]=1029,ee=!0);ee&&(t.isWebGL2?s.drawBuffers(q):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(q))}function de(A){return g!==A?(s.useProgram(A),g=A,!0):!1}let Ce={[ci]:32774,[ah]:32778,[lh]:32779};if(n)Ce[ja]=32775,Ce[Ka]=32776;else{let A=e.get("EXT_blend_minmax");A!==null&&(Ce[ja]=A.MIN_EXT,Ce[Ka]=A.MAX_EXT)}let Ee={[ch]:0,[hh]:1,[uh]:768,[Lc]:770,[xh]:776,[mh]:774,[fh]:772,[dh]:769,[Pc]:771,[gh]:775,[ph]:773};function X(A,G,q,ee,D,Q,ge,Le){if(A===mn){x===!0&&(Ne(3042),x=!1);return}if(x===!1&&(H(3042),x=!0),A!==oh){if(A!==_||Le!==L){if((m!==ci||M!==ci)&&(s.blendEquation(32774),m=ci,M=ci),Le)switch(A){case Xi:s.blendFuncSeparate(1,771,1,771);break;case Ja:s.blendFunc(1,1);break;case Za:s.blendFuncSeparate(0,769,0,1);break;case $a:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case Xi:s.blendFuncSeparate(770,771,1,771);break;case Ja:s.blendFunc(770,1);break;case Za:s.blendFuncSeparate(0,769,0,1);break;case $a:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}f=null,T=null,E=null,R=null,_=A,L=Le}return}D=D||G,Q=Q||q,ge=ge||ee,(G!==m||D!==M)&&(s.blendEquationSeparate(Ce[G],Ce[D]),m=G,M=D),(q!==f||ee!==T||Q!==E||ge!==R)&&(s.blendFuncSeparate(Ee[q],Ee[ee],Ee[Q],Ee[ge]),f=q,T=ee,E=Q,R=ge),_=A,L=null}function ie(A,G){A.side===xi?Ne(2884):H(2884);let q=A.side===ot;G&&(q=!q),te(q),A.blending===Xi&&A.transparent===!1?X(mn):X(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.premultipliedAlpha),c.setFunc(A.depthFunc),c.setTest(A.depthTest),c.setMask(A.depthWrite),a.setMask(A.colorWrite);let ee=A.stencilWrite;l.setTest(ee),ee&&(l.setMask(A.stencilWriteMask),l.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),l.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),Se(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?H(32926):Ne(32926)}function te(A){Z!==A&&(A?s.frontFace(2304):s.frontFace(2305),Z=A)}function ue(A){A!==ih?(H(2884),A!==ce&&(A===Ya?s.cullFace(1029):A===rh?s.cullFace(1028):s.cullFace(1032))):Ne(2884),ce=A}function ae(A){A!==$&&(N&&s.lineWidth(A),$=A)}function Se(A,G,q){A?(H(32823),(y!==G||C!==q)&&(s.polygonOffset(G,q),y=G,C=q)):Ne(32823)}function pe(A){A?H(3089):Ne(3089)}function De(A){A===void 0&&(A=33984+I-1),U!==A&&(s.activeTexture(A),U=A)}function Ve(A,G){U===null&&De();let q=j[U];q===void 0&&(q={type:void 0,texture:void 0},j[U]=q),(q.type!==A||q.texture!==G)&&(s.bindTexture(A,G||_e[A]),q.type=A,q.texture=G)}function Ue(){let A=j[U];A!==void 0&&A.type!==void 0&&(s.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function b(){try{s.compressedTexImage2D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function v(){try{s.texSubImage2D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function W(){try{s.texSubImage3D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ne(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function me(){try{s.texStorage2D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function V(){try{s.texStorage3D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Me(){try{s.texImage2D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ye(){try{s.texImage3D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function le(A){Y.equals(A)===!1&&(s.scissor(A.x,A.y,A.z,A.w),Y.copy(A))}function oe(A){re.equals(A)===!1&&(s.viewport(A.x,A.y,A.z,A.w),re.copy(A))}function Te(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},U=null,j={},u={},d=new WeakMap,p=[],g=null,x=!1,_=null,m=null,f=null,T=null,M=null,E=null,R=null,L=!1,Z=null,ce=null,$=null,y=null,C=null,Y.set(0,0,s.canvas.width,s.canvas.height),re.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:H,disable:Ne,bindFramebuffer:ve,drawBuffers:we,useProgram:de,setBlending:X,setMaterial:ie,setFlipSided:te,setCullFace:ue,setLineWidth:ae,setPolygonOffset:Se,setScissorTest:pe,activeTexture:De,bindTexture:Ve,unbindTexture:Ue,compressedTexImage2D:b,texImage2D:Me,texImage3D:ye,texStorage2D:me,texStorage3D:V,texSubImage2D:v,texSubImage3D:W,compressedTexSubImage2D:ne,scissor:le,viewport:oe,reset:Te}}function Lm(s,e,t,n,i,r,o){let a=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):void 0,g=new WeakMap,x,_=!1;try{_=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(b,v){return _?new OffscreenCanvas(b,v):er("canvas")}function f(b,v,W,ne){let me=1;if((b.width>ne||b.height>ne)&&(me=ne/Math.max(b.width,b.height)),me<1||v===!0)if(typeof HTMLImageElement!="undefined"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&b instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&b instanceof ImageBitmap){let V=v?nu:Math.floor,Me=V(me*b.width),ye=V(me*b.height);x===void 0&&(x=m(Me,ye));let le=W?m(Me,ye):x;return le.width=Me,le.height=ye,le.getContext("2d").drawImage(b,0,0,Me,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+Me+"x"+ye+")."),le}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function T(b){return bl(b.width)&&bl(b.height)}function M(b){return a?!1:b.wrapS!==Rt||b.wrapT!==Rt||b.minFilter!==at&&b.minFilter!==xt}function E(b,v){return b.generateMipmaps&&v&&b.minFilter!==at&&b.minFilter!==xt}function R(b){s.generateMipmap(b)}function L(b,v,W,ne,me=!1){if(a===!1)return v;if(b!==null){if(s[b]!==void 0)return s[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let V=v;return v===6403&&(W===5126&&(V=33326),W===5131&&(V=33325),W===5121&&(V=33321)),v===33319&&(W===5126&&(V=33328),W===5131&&(V=33327),W===5121&&(V=33323)),v===6408&&(W===5126&&(V=34836),W===5131&&(V=34842),W===5121&&(V=ne===qe&&me===!1?35907:32856),W===32819&&(V=32854),W===32820&&(V=32855)),(V===33325||V===33326||V===33327||V===33328||V===34842||V===34836)&&e.get("EXT_color_buffer_float"),V}function Z(b,v,W){return E(b,W)===!0||b.isFramebufferTexture&&b.minFilter!==at&&b.minFilter!==xt?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function ce(b){return b===at||b===Qa||b===el?9728:9729}function $(b){let v=b.target;v.removeEventListener("dispose",$),C(v),v.isVideoTexture&&g.delete(v),o.memory.textures--}function y(b){let v=b.target;v.removeEventListener("dispose",y),I(v)}function C(b){let v=n.get(b);v.__webglInit!==void 0&&(s.deleteTexture(v.__webglTexture),n.remove(b))}function I(b){let v=b.texture,W=n.get(b),ne=n.get(v);if(b){if(ne.__webglTexture!==void 0&&(s.deleteTexture(ne.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let me=0;me<6;me++)s.deleteFramebuffer(W.__webglFramebuffer[me]),W.__webglDepthbuffer&&s.deleteRenderbuffer(W.__webglDepthbuffer[me]);else s.deleteFramebuffer(W.__webglFramebuffer),W.__webglDepthbuffer&&s.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&s.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer&&s.deleteRenderbuffer(W.__webglColorRenderbuffer),W.__webglDepthRenderbuffer&&s.deleteRenderbuffer(W.__webglDepthRenderbuffer);if(b.isWebGLMultipleRenderTargets)for(let me=0,V=v.length;me<V;me++){let Me=n.get(v[me]);Me.__webglTexture&&(s.deleteTexture(Me.__webglTexture),o.memory.textures--),n.remove(v[me])}n.remove(v),n.remove(b)}}let N=0;function B(){N=0}function F(){let b=N;return b>=c&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+c),N+=1,b}function U(b,v){let W=n.get(b);if(b.isVideoTexture&&ae(b),b.version>0&&W.__version!==b.version){let ne=b.image;if(ne===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{H(W,b,v);return}}t.activeTexture(33984+v),t.bindTexture(3553,W.__webglTexture)}function j(b,v){let W=n.get(b);if(b.version>0&&W.__version!==b.version){H(W,b,v);return}t.activeTexture(33984+v),t.bindTexture(35866,W.__webglTexture)}function he(b,v){let W=n.get(b);if(b.version>0&&W.__version!==b.version){H(W,b,v);return}t.activeTexture(33984+v),t.bindTexture(32879,W.__webglTexture)}function k(b,v){let W=n.get(b);if(b.version>0&&W.__version!==b.version){Ne(W,b,v);return}t.activeTexture(33984+v),t.bindTexture(34067,W.__webglTexture)}let Y={[Nn]:10497,[Rt]:33071,[Ro]:33648},re={[at]:9728,[Qa]:9984,[el]:9986,[xt]:9729,[Ph]:9985,[Bs]:9987};function fe(b,v,W){if(W?(s.texParameteri(b,10242,Y[v.wrapS]),s.texParameteri(b,10243,Y[v.wrapT]),(b===32879||b===35866)&&s.texParameteri(b,32882,Y[v.wrapR]),s.texParameteri(b,10240,re[v.magFilter]),s.texParameteri(b,10241,re[v.minFilter])):(s.texParameteri(b,10242,33071),s.texParameteri(b,10243,33071),(b===32879||b===35866)&&s.texParameteri(b,32882,33071),(v.wrapS!==Rt||v.wrapT!==Rt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(b,10240,ce(v.magFilter)),s.texParameteri(b,10241,ce(v.minFilter)),v.minFilter!==at&&v.minFilter!==xt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){let ne=e.get("EXT_texture_filter_anisotropic");if(v.type===In&&e.has("OES_texture_float_linear")===!1||a===!1&&v.type===fi&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(s.texParameterf(b,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function _e(b,v){b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",$),b.__webglTexture=s.createTexture(),o.memory.textures++)}function H(b,v,W){let ne=3553;v.isDataTexture2DArray&&(ne=35866),v.isDataTexture3D&&(ne=32879),_e(b,v),t.activeTexture(33984+W),t.bindTexture(ne,b.__webglTexture),s.pixelStorei(37440,v.flipY),s.pixelStorei(37441,v.premultiplyAlpha),s.pixelStorei(3317,v.unpackAlignment),s.pixelStorei(37443,0);let me=M(v)&&T(v.image)===!1,V=f(v.image,me,!1,h);V=Se(v,V);let Me=T(V)||a,ye=r.convert(v.format,v.encoding),le=r.convert(v.type),oe=L(v.internalFormat,ye,le,v.encoding,v.isVideoTexture);fe(ne,v,Me);let Te,A=v.mipmaps,G=a&&v.isVideoTexture!==!0,q=b.__version===void 0,ee=Z(v,V,Me);if(v.isDepthTexture)oe=6402,a?v.type===In?oe=36012:v.type===os?oe=33190:v.type===pi?oe=35056:oe=33189:v.type===In&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Fn&&oe===6402&&v.type!==Ki&&v.type!==os&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=Ki,le=r.convert(v.type)),v.format===yi&&oe===6402&&(oe=34041,v.type!==pi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=pi,le=r.convert(v.type))),G&&q?t.texStorage2D(3553,1,oe,V.width,V.height):t.texImage2D(3553,0,oe,V.width,V.height,0,ye,le,null);else if(v.isDataTexture)if(A.length>0&&Me){G&&q&&t.texStorage2D(3553,ee,oe,A[0].width,A[0].height);for(let D=0,Q=A.length;D<Q;D++)Te=A[D],G?t.texSubImage2D(3553,0,0,0,Te.width,Te.height,ye,le,Te.data):t.texImage2D(3553,D,oe,Te.width,Te.height,0,ye,le,Te.data);v.generateMipmaps=!1}else G?(q&&t.texStorage2D(3553,ee,oe,V.width,V.height),t.texSubImage2D(3553,0,0,0,V.width,V.height,ye,le,V.data)):t.texImage2D(3553,0,oe,V.width,V.height,0,ye,le,V.data);else if(v.isCompressedTexture){G&&q&&t.texStorage2D(3553,ee,oe,A[0].width,A[0].height);for(let D=0,Q=A.length;D<Q;D++)Te=A[D],v.format!==Mt?ye!==null?G?t.compressedTexSubImage2D(3553,D,0,0,Te.width,Te.height,ye,Te.data):t.compressedTexImage2D(3553,D,oe,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?t.texSubImage2D(3553,D,0,0,Te.width,Te.height,ye,le,Te.data):t.texImage2D(3553,D,oe,Te.width,Te.height,0,ye,le,Te.data)}else if(v.isDataTexture2DArray)G?(q&&t.texStorage3D(35866,ee,oe,V.width,V.height,V.depth),t.texSubImage3D(35866,0,0,0,0,V.width,V.height,V.depth,ye,le,V.data)):t.texImage3D(35866,0,oe,V.width,V.height,V.depth,0,ye,le,V.data);else if(v.isDataTexture3D)G?(q&&t.texStorage3D(32879,ee,oe,V.width,V.height,V.depth),t.texSubImage3D(32879,0,0,0,0,V.width,V.height,V.depth,ye,le,V.data)):t.texImage3D(32879,0,oe,V.width,V.height,V.depth,0,ye,le,V.data);else if(v.isFramebufferTexture)G&&q?t.texStorage2D(3553,ee,oe,V.width,V.height):t.texImage2D(3553,0,oe,V.width,V.height,0,ye,le,null);else if(A.length>0&&Me){G&&q&&t.texStorage2D(3553,ee,oe,A[0].width,A[0].height);for(let D=0,Q=A.length;D<Q;D++)Te=A[D],G?t.texSubImage2D(3553,D,0,0,ye,le,Te):t.texImage2D(3553,D,oe,ye,le,Te);v.generateMipmaps=!1}else G?(q&&t.texStorage2D(3553,ee,oe,V.width,V.height),t.texSubImage2D(3553,0,0,0,ye,le,V)):t.texImage2D(3553,0,oe,ye,le,V);E(v,Me)&&R(ne),b.__version=v.version,v.onUpdate&&v.onUpdate(v)}function Ne(b,v,W){if(v.image.length!==6)return;_e(b,v),t.activeTexture(33984+W),t.bindTexture(34067,b.__webglTexture),s.pixelStorei(37440,v.flipY),s.pixelStorei(37441,v.premultiplyAlpha),s.pixelStorei(3317,v.unpackAlignment),s.pixelStorei(37443,0);let ne=v&&(v.isCompressedTexture||v.image[0].isCompressedTexture),me=v.image[0]&&v.image[0].isDataTexture,V=[];for(let D=0;D<6;D++)!ne&&!me?V[D]=f(v.image[D],!1,!0,l):V[D]=me?v.image[D].image:v.image[D],V[D]=Se(v,V[D]);let Me=V[0],ye=T(Me)||a,le=r.convert(v.format,v.encoding),oe=r.convert(v.type),Te=L(v.internalFormat,le,oe,v.encoding),A=a&&v.isVideoTexture!==!0,G=b.__version===void 0,q=Z(v,Me,ye);fe(34067,v,ye);let ee;if(ne){A&&G&&t.texStorage2D(34067,q,Te,Me.width,Me.height);for(let D=0;D<6;D++){ee=V[D].mipmaps;for(let Q=0;Q<ee.length;Q++){let ge=ee[Q];v.format!==Mt?le!==null?A?t.compressedTexSubImage2D(34069+D,Q,0,0,ge.width,ge.height,le,ge.data):t.compressedTexImage2D(34069+D,Q,Te,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):A?t.texSubImage2D(34069+D,Q,0,0,ge.width,ge.height,le,oe,ge.data):t.texImage2D(34069+D,Q,Te,ge.width,ge.height,0,le,oe,ge.data)}}}else{ee=v.mipmaps,A&&G&&(ee.length>0&&q++,t.texStorage2D(34067,q,Te,V[0].width,V[0].height));for(let D=0;D<6;D++)if(me){A?t.texSubImage2D(34069+D,0,0,0,V[D].width,V[D].height,le,oe,V[D].data):t.texImage2D(34069+D,0,Te,V[D].width,V[D].height,0,le,oe,V[D].data);for(let Q=0;Q<ee.length;Q++){let Le=ee[Q].image[D].image;A?t.texSubImage2D(34069+D,Q+1,0,0,Le.width,Le.height,le,oe,Le.data):t.texImage2D(34069+D,Q+1,Te,Le.width,Le.height,0,le,oe,Le.data)}}else{A?t.texSubImage2D(34069+D,0,0,0,le,oe,V[D]):t.texImage2D(34069+D,0,Te,le,oe,V[D]);for(let Q=0;Q<ee.length;Q++){let ge=ee[Q];A?t.texSubImage2D(34069+D,Q+1,0,0,le,oe,ge.image[D]):t.texImage2D(34069+D,Q+1,Te,le,oe,ge.image[D])}}}E(v,ye)&&R(34067),b.__version=v.version,v.onUpdate&&v.onUpdate(v)}function ve(b,v,W,ne,me){let V=r.convert(W.format,W.encoding),Me=r.convert(W.type),ye=L(W.internalFormat,V,Me,W.encoding);n.get(v).__hasExternalTextures||(me===32879||me===35866?t.texImage3D(me,0,ye,v.width,v.height,v.depth,0,V,Me,null):t.texImage2D(me,0,ye,v.width,v.height,0,V,Me,null)),t.bindFramebuffer(36160,b),v.useRenderToTexture?p.framebufferTexture2DMultisampleEXT(36160,ne,me,n.get(W).__webglTexture,0,ue(v)):s.framebufferTexture2D(36160,ne,me,n.get(W).__webglTexture,0),t.bindFramebuffer(36160,null)}function we(b,v,W){if(s.bindRenderbuffer(36161,b),v.depthBuffer&&!v.stencilBuffer){let ne=33189;if(W||v.useRenderToTexture){let me=v.depthTexture;me&&me.isDepthTexture&&(me.type===In?ne=36012:me.type===os&&(ne=33190));let V=ue(v);v.useRenderToTexture?p.renderbufferStorageMultisampleEXT(36161,V,ne,v.width,v.height):s.renderbufferStorageMultisample(36161,V,ne,v.width,v.height)}else s.renderbufferStorage(36161,ne,v.width,v.height);s.framebufferRenderbuffer(36160,36096,36161,b)}else if(v.depthBuffer&&v.stencilBuffer){let ne=ue(v);W&&v.useRenderbuffer?s.renderbufferStorageMultisample(36161,ne,35056,v.width,v.height):v.useRenderToTexture?p.renderbufferStorageMultisampleEXT(36161,ne,35056,v.width,v.height):s.renderbufferStorage(36161,34041,v.width,v.height),s.framebufferRenderbuffer(36160,33306,36161,b)}else{let ne=v.isWebGLMultipleRenderTargets===!0?v.texture[0]:v.texture,me=r.convert(ne.format,ne.encoding),V=r.convert(ne.type),Me=L(ne.internalFormat,me,V,ne.encoding),ye=ue(v);W&&v.useRenderbuffer?s.renderbufferStorageMultisample(36161,ye,Me,v.width,v.height):v.useRenderToTexture?p.renderbufferStorageMultisampleEXT(36161,ye,Me,v.width,v.height):s.renderbufferStorage(36161,Me,v.width,v.height)}s.bindRenderbuffer(36161,null)}function de(b,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),U(v.depthTexture,0);let ne=n.get(v.depthTexture).__webglTexture,me=ue(v);if(v.depthTexture.format===Fn)v.useRenderToTexture?p.framebufferTexture2DMultisampleEXT(36160,36096,3553,ne,0,me):s.framebufferTexture2D(36160,36096,3553,ne,0);else if(v.depthTexture.format===yi)v.useRenderToTexture?p.framebufferTexture2DMultisampleEXT(36160,33306,3553,ne,0,me):s.framebufferTexture2D(36160,33306,3553,ne,0);else throw new Error("Unknown depthTexture format")}function Ce(b){let v=n.get(b),W=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!v.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");de(v.__webglFramebuffer,b)}else if(W){v.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(36160,v.__webglFramebuffer[ne]),v.__webglDepthbuffer[ne]=s.createRenderbuffer(),we(v.__webglDepthbuffer[ne],b,!1)}else t.bindFramebuffer(36160,v.__webglFramebuffer),v.__webglDepthbuffer=s.createRenderbuffer(),we(v.__webglDepthbuffer,b,!1);t.bindFramebuffer(36160,null)}function Ee(b,v,W){let ne=n.get(b);v!==void 0&&ve(ne.__webglFramebuffer,b,b.texture,36064,3553),W!==void 0&&Ce(b)}function X(b){let v=b.texture,W=n.get(b),ne=n.get(v);b.addEventListener("dispose",y),b.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=s.createTexture()),ne.__version=v.version,o.memory.textures++);let me=b.isWebGLCubeRenderTarget===!0,V=b.isWebGLMultipleRenderTargets===!0,Me=v.isDataTexture3D||v.isDataTexture2DArray,ye=T(b)||a;if(me){W.__webglFramebuffer=[];for(let le=0;le<6;le++)W.__webglFramebuffer[le]=s.createFramebuffer()}else if(W.__webglFramebuffer=s.createFramebuffer(),V)if(i.drawBuffers){let le=b.texture;for(let oe=0,Te=le.length;oe<Te;oe++){let A=n.get(le[oe]);A.__webglTexture===void 0&&(A.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(b.useRenderbuffer)if(a){W.__webglMultisampledFramebuffer=s.createFramebuffer(),W.__webglColorRenderbuffer=s.createRenderbuffer(),s.bindRenderbuffer(36161,W.__webglColorRenderbuffer);let le=r.convert(v.format,v.encoding),oe=r.convert(v.type),Te=L(v.internalFormat,le,oe,v.encoding),A=ue(b);s.renderbufferStorageMultisample(36161,A,Te,b.width,b.height),t.bindFramebuffer(36160,W.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064,36161,W.__webglColorRenderbuffer),s.bindRenderbuffer(36161,null),b.depthBuffer&&(W.__webglDepthRenderbuffer=s.createRenderbuffer(),we(W.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(me){t.bindTexture(34067,ne.__webglTexture),fe(34067,v,ye);for(let le=0;le<6;le++)ve(W.__webglFramebuffer[le],b,v,36064,34069+le);E(v,ye)&&R(34067),t.unbindTexture()}else if(V){let le=b.texture;for(let oe=0,Te=le.length;oe<Te;oe++){let A=le[oe],G=n.get(A);t.bindTexture(3553,G.__webglTexture),fe(3553,A,ye),ve(W.__webglFramebuffer,b,A,36064+oe,3553),E(A,ye)&&R(3553)}t.unbindTexture()}else{let le=3553;Me&&(a?le=v.isDataTexture3D?32879:35866:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),t.bindTexture(le,ne.__webglTexture),fe(le,v,ye),ve(W.__webglFramebuffer,b,v,36064,le),E(v,ye)&&R(le),t.unbindTexture()}b.depthBuffer&&Ce(b)}function ie(b){let v=T(b)||a,W=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ne=0,me=W.length;ne<me;ne++){let V=W[ne];if(E(V,v)){let Me=b.isWebGLCubeRenderTarget?34067:3553,ye=n.get(V).__webglTexture;t.bindTexture(Me,ye),R(Me),t.unbindTexture()}}}function te(b){if(b.useRenderbuffer)if(a){let v=b.width,W=b.height,ne=16384,me=[36064],V=b.stencilBuffer?33306:36096;b.depthBuffer&&me.push(V),b.ignoreDepthForMultisampleCopy||(b.depthBuffer&&(ne|=256),b.stencilBuffer&&(ne|=1024));let Me=n.get(b);t.bindFramebuffer(36008,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,Me.__webglFramebuffer),b.ignoreDepthForMultisampleCopy&&(s.invalidateFramebuffer(36008,[V]),s.invalidateFramebuffer(36009,[V])),s.blitFramebuffer(0,0,v,W,0,0,v,W,ne,9728),s.invalidateFramebuffer(36008,me),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,Me.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function ue(b){return a&&(b.useRenderbuffer||b.useRenderToTexture)?Math.min(u,b.samples):0}function ae(b){let v=o.render.frame;g.get(b)!==v&&(g.set(b,v),b.update())}function Se(b,v){let W=b.encoding,ne=b.format,me=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Co||W!==Mn&&(W===qe?a===!1?e.has("EXT_sRGB")===!0&&ne===Mt?(b.format=Co,b.minFilter=xt,b.generateMipmaps=!1):v=nn.sRGBToLinear(v):(ne!==Mt||me!==xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",W)),v}let pe=!1,De=!1;function Ve(b,v){b&&b.isWebGLRenderTarget&&(pe===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),pe=!0),b=b.texture),U(b,v)}function Ue(b,v){b&&b.isWebGLCubeRenderTarget&&(De===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),De=!0),b=b.texture),k(b,v)}this.allocateTextureUnit=F,this.resetTextureUnits=B,this.setTexture2D=U,this.setTexture2DArray=j,this.setTexture3D=he,this.setTextureCube=k,this.rebindTextures=Ee,this.setupRenderTarget=X,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=ve,this.safeSetTexture2D=Ve,this.safeSetTextureCube=Ue}function Pm(s,e,t){let n=t.isWebGL2;function i(r,o=null){let a;if(r===xn)return 5121;if(r===Nh)return 32819;if(r===Bh)return 32820;if(r===Dh)return 5120;if(r===Ih)return 5122;if(r===Ki)return 5123;if(r===Fh)return 5124;if(r===os)return 5125;if(r===In)return 5126;if(r===fi)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===zh)return 6406;if(r===Mt)return 6408;if(r===Uh)return 6409;if(r===Hh)return 6410;if(r===Fn)return 6402;if(r===yi)return 34041;if(r===Gh)return 6403;if(r===Oh)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===Co)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Vh)return 36244;if(r===kh)return 33319;if(r===Wh)return 33320;if(r===qh)return 36249;if(r===Hs||r===Gs||r===Vs||r===ks)if(o===qe)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Hs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Gs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Vs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ks)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Hs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Gs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Vs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ks)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===tl||r===nl||r===il||r===rl)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===tl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===nl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===il)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===rl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Xh)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===sl||r===ol)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===sl)return o===qe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===ol)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===al||r===ll||r===cl||r===hl||r===ul||r===dl||r===fl||r===pl||r===ml||r===gl||r===xl||r===yl||r===vl||r===_l)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===al)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ll)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===cl)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===hl)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ul)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===dl)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===fl)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===pl)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ml)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===gl)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===xl)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===yl)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===vl)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===_l)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ml)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Ml)return o===qe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===pi)return n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:i}}var ys=class extends ut{constructor(e=[]){super(),this.cameras=e}};ys.prototype.isArrayCamera=!0;var Ot=class extends Ye{constructor(){super(),this.type="Group"}};Ot.prototype.isGroup=!0;var Dm={type:"move"},Yi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ot,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ot,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ot,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(a!==null&&(i=t.getPose(e.targetRaySpace,n),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Dm))),l&&e.hand){o=!0;for(let x of e.hand.values()){let _=t.getJointPose(x,n);if(l.joints[x.jointName]===void 0){let f=new Ot;f.matrixAutoUpdate=!1,f.visible=!1,l.joints[x.jointName]=f,l.add(f)}let m=l.joints[x.jointName];_!==null&&(m.matrix.fromArray(_.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.jointRadius=_.radius),m.visible=_!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}},lr=class extends pt{constructor(e,t,n,i,r,o,a,c,l,h){if(h=h!==void 0?h:Fn,h!==Fn&&h!==yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Fn&&(n=Ki),n===void 0&&h===yi&&(n=pi),super(null,i,r,o,a,c,h,n,l),this.image={width:e,height:t},this.magFilter=a!==void 0?a:at,this.minFilter=c!==void 0?c:at,this.flipY=!1,this.generateMipmaps=!1}};lr.prototype.isDepthTexture=!0;var zo=class extends tn{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",c=e.extensions.has("WEBGL_multisampled_render_to_texture"),l=null,h=null,u=null,d=null,p=!1,g=null,x=t.getContextAttributes(),_=null,m=null,f=[],T=new Map,M=new ut;M.layers.enable(1),M.viewport=new We;let E=new ut;E.layers.enable(2),E.viewport=new We;let R=[M,E],L=new ys;L.layers.enable(1),L.layers.enable(2);let Z=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let Y=f[k];return Y===void 0&&(Y=new Yi,f[k]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(k){let Y=f[k];return Y===void 0&&(Y=new Yi,f[k]=Y),Y.getGripSpace()},this.getHand=function(k){let Y=f[k];return Y===void 0&&(Y=new Yi,f[k]=Y),Y.getHandSpace()};function $(k){let Y=T.get(k.inputSource);Y&&Y.dispatchEvent({type:k.type,data:k.inputSource})}function y(){T.forEach(function(k,Y){k.disconnect(Y)}),T.clear(),Z=null,ce=null,e.setRenderTarget(_),d=null,u=null,h=null,i=null,m=null,he.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(k){if(i=k,i!==null){if(_=e.getRenderTarget(),i.addEventListener("select",$),i.addEventListener("selectstart",$),i.addEventListener("selectend",$),i.addEventListener("squeeze",$),i.addEventListener("squeezestart",$),i.addEventListener("squeezeend",$),i.addEventListener("end",y),i.addEventListener("inputsourceschange",C),x.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let Y={antialias:i.renderState.layers===void 0?x.antialias:!0,alpha:x.alpha,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,Y),i.updateRenderState({baseLayer:d}),m=new St(d.framebufferWidth,d.framebufferHeight,{format:Mt,type:xn,encoding:e.outputEncoding})}else{p=x.antialias;let Y=null,re=null,fe=null;x.depth&&(fe=x.stencil?35056:33190,Y=x.stencil?yi:Fn,re=x.stencil?pi:Ki);let _e={colorFormat:e.outputEncoding===qe?35907:32856,depthFormat:fe,scaleFactor:r};h=new XRWebGLBinding(i,t),u=h.createProjectionLayer(_e),i.updateRenderState({layers:[u]}),p?m=new tr(u.textureWidth,u.textureHeight,{format:Mt,type:xn,depthTexture:new lr(u.textureWidth,u.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:x.stencil,ignoreDepth:u.ignoreDepthValues,useRenderToTexture:c,encoding:e.outputEncoding}):m=new St(u.textureWidth,u.textureHeight,{format:Mt,type:xn,depthTexture:new lr(u.textureWidth,u.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:x.stencil,ignoreDepth:u.ignoreDepthValues,encoding:e.outputEncoding})}m.isXRRenderTarget=!0,this.setFoveation(1),o=await i.requestReferenceSpace(a),he.setContext(i),he.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function C(k){let Y=i.inputSources;for(let re=0;re<f.length;re++)T.set(Y[re],f[re]);for(let re=0;re<k.removed.length;re++){let fe=k.removed[re],_e=T.get(fe);_e&&(_e.dispatchEvent({type:"disconnected",data:fe}),T.delete(fe))}for(let re=0;re<k.added.length;re++){let fe=k.added[re],_e=T.get(fe);_e&&_e.dispatchEvent({type:"connected",data:fe})}}let I=new S,N=new S;function B(k,Y,re){I.setFromMatrixPosition(Y.matrixWorld),N.setFromMatrixPosition(re.matrixWorld);let fe=I.distanceTo(N),_e=Y.projectionMatrix.elements,H=re.projectionMatrix.elements,Ne=_e[14]/(_e[10]-1),ve=_e[14]/(_e[10]+1),we=(_e[9]+1)/_e[5],de=(_e[9]-1)/_e[5],Ce=(_e[8]-1)/_e[0],Ee=(H[8]+1)/H[0],X=Ne*Ce,ie=Ne*Ee,te=fe/(-Ce+Ee),ue=te*-Ce;Y.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(ue),k.translateZ(te),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();let ae=Ne+te,Se=ve+te,pe=X-ue,De=ie+(fe-ue),Ve=we*ve/Se*ae,Ue=de*ve/Se*ae;k.projectionMatrix.makePerspective(pe,De,Ve,Ue,ae,Se)}function F(k,Y){Y===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(Y.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(i===null)return;L.near=E.near=M.near=k.near,L.far=E.far=M.far=k.far,(Z!==L.near||ce!==L.far)&&(i.updateRenderState({depthNear:L.near,depthFar:L.far}),Z=L.near,ce=L.far);let Y=k.parent,re=L.cameras;F(L,Y);for(let _e=0;_e<re.length;_e++)F(re[_e],Y);L.matrixWorld.decompose(L.position,L.quaternion,L.scale),k.position.copy(L.position),k.quaternion.copy(L.quaternion),k.scale.copy(L.scale),k.matrix.copy(L.matrix),k.matrixWorld.copy(L.matrixWorld);let fe=k.children;for(let _e=0,H=fe.length;_e<H;_e++)fe[_e].updateMatrixWorld(!0);re.length===2?B(L,M,E):L.projectionMatrix.copy(M.projectionMatrix)},this.getCamera=function(){return L},this.getFoveation=function(){if(u!==null)return u.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(k){u!==null&&(u.fixedFoveation=k),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=k)};let U=null;function j(k,Y){if(l=Y.getViewerPose(o),g=Y,l!==null){let fe=l.views;d!==null&&(e.setRenderTargetFramebuffer(m,d.framebuffer),e.setRenderTarget(m));let _e=!1;fe.length!==L.cameras.length&&(L.cameras.length=0,_e=!0);for(let H=0;H<fe.length;H++){let Ne=fe[H],ve=null;if(d!==null)ve=d.getViewport(Ne);else{let de=h.getViewSubImage(u,Ne);ve=de.viewport,H===0&&(e.setRenderTargetTextures(m,de.colorTexture,u.ignoreDepthValues?void 0:de.depthStencilTexture),e.setRenderTarget(m))}let we=R[H];we.matrix.fromArray(Ne.transform.matrix),we.projectionMatrix.fromArray(Ne.projectionMatrix),we.viewport.set(ve.x,ve.y,ve.width,ve.height),H===0&&L.matrix.copy(we.matrix),_e===!0&&L.cameras.push(we)}}let re=i.inputSources;for(let fe=0;fe<f.length;fe++){let _e=f[fe],H=re[fe];_e.update(H,Y,o)}U&&U(k,Y),g=null}let he=new Bc;he.setAnimationLoop(j),this.setAnimationLoop=function(k){U=k},this.dispose=function(){}}};function Im(s){function e(m,f){m.fogColor.value.copy(f.color),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function t(m,f,T,M,E){f.isMeshBasicMaterial?n(m,f):f.isMeshLambertMaterial?(n(m,f),c(m,f)):f.isMeshToonMaterial?(n(m,f),h(m,f)):f.isMeshPhongMaterial?(n(m,f),l(m,f)):f.isMeshStandardMaterial?(n(m,f),f.isMeshPhysicalMaterial?d(m,f,E):u(m,f)):f.isMeshMatcapMaterial?(n(m,f),p(m,f)):f.isMeshDepthMaterial?(n(m,f),g(m,f)):f.isMeshDistanceMaterial?(n(m,f),x(m,f)):f.isMeshNormalMaterial?(n(m,f),_(m,f)):f.isLineBasicMaterial?(i(m,f),f.isLineDashedMaterial&&r(m,f)):f.isPointsMaterial?o(m,f,T,M):f.isSpriteMaterial?a(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function n(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.specularMap&&(m.specularMap.value=f.specularMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let T=s.get(f).envMap;T&&(m.envMap.value=T,m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity);let M;f.map?M=f.map:f.specularMap?M=f.specularMap:f.displacementMap?M=f.displacementMap:f.normalMap?M=f.normalMap:f.bumpMap?M=f.bumpMap:f.roughnessMap?M=f.roughnessMap:f.metalnessMap?M=f.metalnessMap:f.alphaMap?M=f.alphaMap:f.emissiveMap?M=f.emissiveMap:f.clearcoatMap?M=f.clearcoatMap:f.clearcoatNormalMap?M=f.clearcoatNormalMap:f.clearcoatRoughnessMap?M=f.clearcoatRoughnessMap:f.specularIntensityMap?M=f.specularIntensityMap:f.specularColorMap?M=f.specularColorMap:f.transmissionMap?M=f.transmissionMap:f.thicknessMap?M=f.thicknessMap:f.sheenColorMap?M=f.sheenColorMap:f.sheenRoughnessMap&&(M=f.sheenRoughnessMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),m.uvTransform.value.copy(M.matrix));let E;f.aoMap?E=f.aoMap:f.lightMap&&(E=f.lightMap),E!==void 0&&(E.isWebGLRenderTarget&&(E=E.texture),E.matrixAutoUpdate===!0&&E.updateMatrix(),m.uv2Transform.value.copy(E.matrix))}function i(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity}function r(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function o(m,f,T,M){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*T,m.scale.value=M*.5,f.map&&(m.map.value=f.map),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let E;f.map?E=f.map:f.alphaMap&&(E=f.alphaMap),E!==void 0&&(E.matrixAutoUpdate===!0&&E.updateMatrix(),m.uvTransform.value.copy(E.matrix))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let T;f.map?T=f.map:f.alphaMap&&(T=f.alphaMap),T!==void 0&&(T.matrixAutoUpdate===!0&&T.updateMatrix(),m.uvTransform.value.copy(T.matrix))}function c(m,f){f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap)}function l(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap),f.bumpMap&&(m.bumpMap.value=f.bumpMap,m.bumpScale.value=f.bumpScale,f.side===ot&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,m.normalScale.value.copy(f.normalScale),f.side===ot&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap),f.bumpMap&&(m.bumpMap.value=f.bumpMap,m.bumpScale.value=f.bumpScale,f.side===ot&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,m.normalScale.value.copy(f.normalScale),f.side===ot&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias)}function u(m,f){m.roughness.value=f.roughness,m.metalness.value=f.metalness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap),f.bumpMap&&(m.bumpMap.value=f.bumpMap,m.bumpScale.value=f.bumpScale,f.side===ot&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,m.normalScale.value.copy(f.normalScale),f.side===ot&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),s.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function d(m,f,T){u(m,f),m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),m.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===ot&&m.clearcoatNormalScale.value.negate())),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap)}function p(m,f){f.matcap&&(m.matcap.value=f.matcap),f.bumpMap&&(m.bumpMap.value=f.bumpMap,m.bumpScale.value=f.bumpScale,f.side===ot&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,m.normalScale.value.copy(f.normalScale),f.side===ot&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias)}function g(m,f){f.displacementMap&&(m.displacementMap.value=f.displacementMap,m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias)}function x(m,f){f.displacementMap&&(m.displacementMap.value=f.displacementMap,m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),m.referencePosition.value.copy(f.referencePosition),m.nearDistance.value=f.nearDistance,m.farDistance.value=f.farDistance}function _(m,f){f.bumpMap&&(m.bumpMap.value=f.bumpMap,m.bumpScale.value=f.bumpScale,f.side===ot&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,m.normalScale.value.copy(f.normalScale),f.side===ot&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function Fm(){let s=er("canvas");return s.style.display="block",s}function Ge(s={}){let e=s.canvas!==void 0?s.canvas:Fm(),t=s.context!==void 0?s.context:null,n=s.alpha!==void 0?s.alpha:!1,i=s.depth!==void 0?s.depth:!0,r=s.stencil!==void 0?s.stencil:!0,o=s.antialias!==void 0?s.antialias:!1,a=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,c=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,l=s.powerPreference!==void 0?s.powerPreference:"default",h=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1,u=null,d=null,p=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Mn,this.physicallyCorrectLights=!1,this.toneMapping=gn,this.toneMappingExposure=1;let x=this,_=!1,m=0,f=0,T=null,M=-1,E=null,R=new We,L=new We,Z=null,ce=e.width,$=e.height,y=1,C=null,I=null,N=new We(0,0,ce,$),B=new We(0,0,ce,$),F=!1,U=new wi,j=!1,he=!1,k=null,Y=new be,re=new S,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function _e(){return T===null?y:1}let H=t;function Ne(w,P){for(let O=0;O<w.length;O++){let z=w[O],J=e.getContext(z,P);if(J!==null)return J}return null}try{let w={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ua}`),e.addEventListener("webglcontextlost",Te,!1),e.addEventListener("webglcontextrestored",A,!1),H===null){let P=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&P.shift(),H=Ne(P,w),H===null)throw Ne(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ve,we,de,Ce,Ee,X,ie,te,ue,ae,Se,pe,De,Ve,Ue,b,v,W,ne,me,V,Me,ye;function le(){ve=new np(H),we=new $f(H,ve,s),ve.init(we),Me=new Pm(H,ve,we),de=new Cm(H,ve,we),Ce=new sp(H),Ee=new ym,X=new Lm(H,ve,de,Ee,we,Me,Ce),ie=new Kf(x),te=new tp(x),ue=new vu(H,we),ye=new Jf(H,ve,ue,we),ae=new ip(H,ue,Ce,ye),Se=new cp(H,ae,ue,Ce),ne=new lp(H,we,X),b=new jf(Ee),pe=new xm(x,ie,te,ve,we,ye,b),De=new Im(Ee),Ve=new _m,Ue=new Tm(ve,we),W=new Yf(x,ie,de,Se,n,a),v=new Xc(x,Se,we),me=new Zf(H,ve,Ce,we),V=new rp(H,ve,Ce,we),Ce.programs=pe.programs,x.capabilities=we,x.extensions=ve,x.properties=Ee,x.renderLists=Ve,x.shadowMap=v,x.state=de,x.info=Ce}le();let oe=new zo(x,H);this.xr=oe,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let w=ve.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=ve.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return y},this.setPixelRatio=function(w){w!==void 0&&(y=w,this.setSize(ce,$,!1))},this.getSize=function(w){return w.set(ce,$)},this.setSize=function(w,P,O){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ce=w,$=P,e.width=Math.floor(w*y),e.height=Math.floor(P*y),O!==!1&&(e.style.width=w+"px",e.style.height=P+"px"),this.setViewport(0,0,w,P)},this.getDrawingBufferSize=function(w){return w.set(ce*y,$*y).floor()},this.setDrawingBufferSize=function(w,P,O){ce=w,$=P,y=O,e.width=Math.floor(w*O),e.height=Math.floor(P*O),this.setViewport(0,0,w,P)},this.getCurrentViewport=function(w){return w.copy(R)},this.getViewport=function(w){return w.copy(N)},this.setViewport=function(w,P,O,z){w.isVector4?N.set(w.x,w.y,w.z,w.w):N.set(w,P,O,z),de.viewport(R.copy(N).multiplyScalar(y).floor())},this.getScissor=function(w){return w.copy(B)},this.setScissor=function(w,P,O,z){w.isVector4?B.set(w.x,w.y,w.z,w.w):B.set(w,P,O,z),de.scissor(L.copy(B).multiplyScalar(y).floor())},this.getScissorTest=function(){return F},this.setScissorTest=function(w){de.setScissorTest(F=w)},this.setOpaqueSort=function(w){C=w},this.setTransparentSort=function(w){I=w},this.getClearColor=function(w){return w.copy(W.getClearColor())},this.setClearColor=function(){W.setClearColor.apply(W,arguments)},this.getClearAlpha=function(){return W.getClearAlpha()},this.setClearAlpha=function(){W.setClearAlpha.apply(W,arguments)},this.clear=function(w,P,O){let z=0;(w===void 0||w)&&(z|=16384),(P===void 0||P)&&(z|=256),(O===void 0||O)&&(z|=1024),H.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Te,!1),e.removeEventListener("webglcontextrestored",A,!1),Ve.dispose(),Ue.dispose(),Ee.dispose(),ie.dispose(),te.dispose(),Se.dispose(),ye.dispose(),pe.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",ge),oe.removeEventListener("sessionend",Le),k&&(k.dispose(),k=null),Ke.stop()};function Te(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function A(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;let w=Ce.autoReset,P=v.enabled,O=v.autoUpdate,z=v.needsUpdate,J=v.type;le(),Ce.autoReset=w,v.enabled=P,v.autoUpdate=O,v.needsUpdate=z,v.type=J}function G(w){let P=w.target;P.removeEventListener("dispose",G),q(P)}function q(w){ee(w),Ee.remove(w)}function ee(w){let P=Ee.get(w).programs;P!==void 0&&(P.forEach(function(O){pe.releaseProgram(O)}),w.isShaderMaterial&&pe.releaseShaderCache(w))}this.renderBufferDirect=function(w,P,O,z,J,Ae){P===null&&(P=fe);let Re=J.isMesh&&J.matrixWorld.determinant()<0,Ie=eh(w,P,O,z,J);de.setMaterial(z,Re);let Pe=O.index,ke=O.attributes.position;if(Pe===null){if(ke===void 0||ke.count===0)return}else if(Pe.count===0)return;let ze=1;z.wireframe===!0&&(Pe=ae.getWireframeAttribute(O),ze=2),ye.setup(J,z,Ie,O,Pe);let Oe,tt=me;Pe!==null&&(Oe=ue.get(Pe),tt=V,tt.setIndex(Oe));let Rn=Pe!==null?Pe.count:ke.count,kn=O.drawRange.start*ze,He=O.drawRange.count*ze,Ht=Ae!==null?Ae.start*ze:0,st=Ae!==null?Ae.count*ze:1/0,Gt=Math.max(kn,Ht),Tr=Math.min(Rn,kn+He,Ht+st)-1,Vt=Math.max(0,Tr-Gt+1);if(Vt!==0){if(J.isMesh)z.wireframe===!0?(de.setLineWidth(z.wireframeLinewidth*_e()),tt.setMode(1)):tt.setMode(4);else if(J.isLine){let Jt=z.linewidth;Jt===void 0&&(Jt=1),de.setLineWidth(Jt*_e()),J.isLineSegments?tt.setMode(1):J.isLineLoop?tt.setMode(2):tt.setMode(3)}else J.isPoints?tt.setMode(0):J.isSprite&&tt.setMode(4);if(J.isInstancedMesh)tt.renderInstances(Gt,Vt,J.count);else if(O.isInstancedBufferGeometry){let Jt=Math.min(O.instanceCount,O._maxInstanceCount);tt.renderInstances(Gt,Vt,Jt)}else tt.render(Gt,Vt)}},this.compile=function(w,P){d=Ue.get(w),d.init(),g.push(d),w.traverseVisible(function(O){O.isLight&&O.layers.test(P.layers)&&(d.pushLight(O),O.castShadow&&d.pushShadow(O))}),d.setupLights(x.physicallyCorrectLights),w.traverse(function(O){let z=O.material;if(z)if(Array.isArray(z))for(let J=0;J<z.length;J++){let Ae=z[J];Ii(Ae,w,O)}else Ii(z,w,O)}),g.pop(),d=null};let D=null;function Q(w){D&&D(w)}function ge(){Ke.stop()}function Le(){Ke.start()}let Ke=new Bc;Ke.setAnimationLoop(Q),typeof window!="undefined"&&Ke.setContext(window),this.setAnimationLoop=function(w){D=w,oe.setAnimationLoop(w),w===null?Ke.stop():Ke.start()},oe.addEventListener("sessionstart",ge),oe.addEventListener("sessionend",Le),this.render=function(w,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;w.autoUpdate===!0&&w.updateMatrixWorld(),P.parent===null&&P.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(P),P=oe.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,P,T),d=Ue.get(w,g.length),d.init(),g.push(d),Y.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),U.setFromProjectionMatrix(Y),he=this.localClippingEnabled,j=b.init(this.clippingPlanes,he,P),u=Ve.get(w,p.length),u.init(),p.push(u),Be(w,P,0,x.sortObjects),u.finish(),x.sortObjects===!0&&u.sort(C,I),j===!0&&b.beginShadows();let O=d.state.shadowsArray;if(v.render(O,w,P),j===!0&&b.endShadows(),this.info.autoReset===!0&&this.info.reset(),W.render(u,w),d.setupLights(x.physicallyCorrectLights),P.isArrayCamera){let z=P.cameras;for(let J=0,Ae=z.length;J<Ae;J++){let Re=z[J];Qe(u,w,Re,Re.viewport)}}else Qe(u,w,P);T!==null&&(X.updateMultisampleRenderTarget(T),X.updateRenderTargetMipmap(T)),w.isScene===!0&&w.onAfterRender(x,w,P),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1),ye.resetDefaultState(),M=-1,E=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,p.pop(),p.length>0?u=p[p.length-1]:u=null};function Be(w,P,O,z){if(w.visible===!1)return;if(w.layers.test(P.layers)){if(w.isGroup)O=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(P);else if(w.isLight)d.pushLight(w),w.castShadow&&d.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||U.intersectsSprite(w)){z&&re.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Y);let Re=Se.update(w),Ie=w.material;Ie.visible&&u.push(w,Re,Ie,O,re.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(w.isSkinnedMesh&&w.skeleton.frame!==Ce.render.frame&&(w.skeleton.update(),w.skeleton.frame=Ce.render.frame),!w.frustumCulled||U.intersectsObject(w))){z&&re.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Y);let Re=Se.update(w),Ie=w.material;if(Array.isArray(Ie)){let Pe=Re.groups;for(let ke=0,ze=Pe.length;ke<ze;ke++){let Oe=Pe[ke],tt=Ie[Oe.materialIndex];tt&&tt.visible&&u.push(w,Re,tt,O,re.z,Oe)}}else Ie.visible&&u.push(w,Re,Ie,O,re.z,null)}}let Ae=w.children;for(let Re=0,Ie=Ae.length;Re<Ie;Re++)Be(Ae[Re],P,O,z)}function Qe(w,P,O,z){let J=w.opaque,Ae=w.transmissive,Re=w.transparent;d.setupLightsView(O),Ae.length>0&&it(J,P,O),z&&de.viewport(R.copy(z)),J.length>0&&Yt(J,P,O),Ae.length>0&&Yt(Ae,P,O),Re.length>0&&Yt(Re,P,O)}function it(w,P,O){if(k===null){let Re=o===!0&&we.isWebGL2===!0?tr:St;k=new Re(1024,1024,{generateMipmaps:!0,type:Me.convert(fi)!==null?fi:xn,minFilter:Bs,magFilter:at,wrapS:Rt,wrapT:Rt,useRenderToTexture:ve.has("WEBGL_multisampled_render_to_texture")})}let z=x.getRenderTarget();x.setRenderTarget(k),x.clear();let J=x.toneMapping;x.toneMapping=gn,Yt(w,P,O),x.toneMapping=J,X.updateMultisampleRenderTarget(k),X.updateRenderTargetMipmap(k),x.setRenderTarget(z)}function Yt(w,P,O){let z=P.isScene===!0?P.overrideMaterial:null;for(let J=0,Ae=w.length;J<Ae;J++){let Re=w[J],Ie=Re.object,Pe=Re.geometry,ke=z===null?Re.material:z,ze=Re.group;Ie.layers.test(O.layers)&&Us(Ie,P,O,Pe,ke,ze)}}function Us(w,P,O,z,J,Ae){w.onBeforeRender(x,P,O,z,J,Ae),w.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),J.onBeforeRender(x,P,O,z,w,Ae),J.transparent===!0&&J.side===xi?(J.side=ot,J.needsUpdate=!0,x.renderBufferDirect(O,P,z,J,w,Ae),J.side=$i,J.needsUpdate=!0,x.renderBufferDirect(O,P,z,J,w,Ae),J.side=xi):x.renderBufferDirect(O,P,z,J,w,Ae),w.onAfterRender(x,P,O,z,J,Ae)}function Ii(w,P,O){P.isScene!==!0&&(P=fe);let z=Ee.get(w),J=d.state.lights,Ae=d.state.shadowsArray,Re=J.state.version,Ie=pe.getParameters(w,J.state,Ae,P,O),Pe=pe.getProgramCacheKey(Ie),ke=z.programs;z.environment=w.isMeshStandardMaterial?P.environment:null,z.fog=P.fog,z.envMap=(w.isMeshStandardMaterial?te:ie).get(w.envMap||z.environment),ke===void 0&&(w.addEventListener("dispose",G),ke=new Map,z.programs=ke);let ze=ke.get(Pe);if(ze!==void 0){if(z.currentProgram===ze&&z.lightsStateVersion===Re)return Vn(w,Ie),ze}else Ie.uniforms=pe.getUniforms(w),w.onBuild(O,Ie,x),w.onBeforeCompile(Ie,x),ze=pe.acquireProgram(Ie,Pe),ke.set(Pe,ze),z.uniforms=Ie.uniforms;let Oe=z.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Oe.clippingPlanes=b.uniform),Vn(w,Ie),z.needsLights=nh(w),z.lightsStateVersion=Re,z.needsLights&&(Oe.ambientLightColor.value=J.state.ambient,Oe.lightProbe.value=J.state.probe,Oe.directionalLights.value=J.state.directional,Oe.directionalLightShadows.value=J.state.directionalShadow,Oe.spotLights.value=J.state.spot,Oe.spotLightShadows.value=J.state.spotShadow,Oe.rectAreaLights.value=J.state.rectArea,Oe.ltc_1.value=J.state.rectAreaLTC1,Oe.ltc_2.value=J.state.rectAreaLTC2,Oe.pointLights.value=J.state.point,Oe.pointLightShadows.value=J.state.pointShadow,Oe.hemisphereLights.value=J.state.hemi,Oe.directionalShadowMap.value=J.state.directionalShadowMap,Oe.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Oe.spotShadowMap.value=J.state.spotShadowMap,Oe.spotShadowMatrix.value=J.state.spotShadowMatrix,Oe.pointShadowMap.value=J.state.pointShadowMap,Oe.pointShadowMatrix.value=J.state.pointShadowMatrix);let tt=ze.getUniforms(),Rn=vn.seqWithValue(tt.seq,Oe);return z.currentProgram=ze,z.uniformsList=Rn,ze}function Vn(w,P){let O=Ee.get(w);O.outputEncoding=P.outputEncoding,O.instancing=P.instancing,O.skinning=P.skinning,O.morphTargets=P.morphTargets,O.morphNormals=P.morphNormals,O.morphTargetsCount=P.morphTargetsCount,O.numClippingPlanes=P.numClippingPlanes,O.numIntersection=P.numClipIntersection,O.vertexAlphas=P.vertexAlphas,O.vertexTangents=P.vertexTangents,O.toneMapping=P.toneMapping}function eh(w,P,O,z,J){P.isScene!==!0&&(P=fe),X.resetTextureUnits();let Ae=P.fog,Re=z.isMeshStandardMaterial?P.environment:null,Ie=T===null?x.outputEncoding:T.isXRRenderTarget===!0?T.texture.encoding:Mn,Pe=(z.isMeshStandardMaterial?te:ie).get(z.envMap||Re),ke=z.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,ze=!!z.normalMap&&!!O.attributes.tangent,Oe=!!O.morphAttributes.position,tt=!!O.morphAttributes.normal,Rn=O.morphAttributes.position?O.morphAttributes.position.length:0,kn=z.toneMapped?x.toneMapping:gn,He=Ee.get(z),Ht=d.state.lights;if(j===!0&&(he===!0||w!==E)){let It=w===E&&z.id===M;b.setState(z,w,It)}let st=!1;z.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Ht.state.version||He.outputEncoding!==Ie||J.isInstancedMesh&&He.instancing===!1||!J.isInstancedMesh&&He.instancing===!0||J.isSkinnedMesh&&He.skinning===!1||!J.isSkinnedMesh&&He.skinning===!0||He.envMap!==Pe||z.fog&&He.fog!==Ae||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==b.numPlanes||He.numIntersection!==b.numIntersection)||He.vertexAlphas!==ke||He.vertexTangents!==ze||He.morphTargets!==Oe||He.morphNormals!==tt||He.toneMapping!==kn||we.isWebGL2===!0&&He.morphTargetsCount!==Rn)&&(st=!0):(st=!0,He.__version=z.version);let Gt=He.currentProgram;st===!0&&(Gt=Ii(z,P,J));let Tr=!1,Vt=!1,Jt=!1,mt=Gt.getUniforms(),Fi=He.uniforms;if(de.useProgram(Gt.program)&&(Tr=!0,Vt=!0,Jt=!0),z.id!==M&&(M=z.id,Vt=!0),Tr||E!==w){if(mt.setValue(H,"projectionMatrix",w.projectionMatrix),we.logarithmicDepthBuffer&&mt.setValue(H,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),E!==w&&(E=w,Vt=!0,Jt=!0),z.isShaderMaterial||z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshStandardMaterial||z.envMap){let It=mt.map.cameraPosition;It!==void 0&&It.setValue(H,re.setFromMatrixPosition(w.matrixWorld))}(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&mt.setValue(H,"isOrthographic",w.isOrthographicCamera===!0),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial||z.isShadowMaterial||J.isSkinnedMesh)&&mt.setValue(H,"viewMatrix",w.matrixWorldInverse)}if(J.isSkinnedMesh){mt.setOptional(H,J,"bindMatrix"),mt.setOptional(H,J,"bindMatrixInverse");let It=J.skeleton;It&&(we.floatVertexTextures?(It.boneTexture===null&&It.computeBoneTexture(),mt.setValue(H,"boneTexture",It.boneTexture,X),mt.setValue(H,"boneTextureSize",It.boneTextureSize)):mt.setOptional(H,It,"boneMatrices"))}return O&&(O.morphAttributes.position!==void 0||O.morphAttributes.normal!==void 0)&&ne.update(J,O,z,Gt),(Vt||He.receiveShadow!==J.receiveShadow)&&(He.receiveShadow=J.receiveShadow,mt.setValue(H,"receiveShadow",J.receiveShadow)),Vt&&(mt.setValue(H,"toneMappingExposure",x.toneMappingExposure),He.needsLights&&th(Fi,Jt),Ae&&z.fog&&De.refreshFogUniforms(Fi,Ae),De.refreshMaterialUniforms(Fi,z,y,$,k),vn.upload(H,He.uniformsList,Fi,X)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(vn.upload(H,He.uniformsList,Fi,X),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&mt.setValue(H,"center",J.center),mt.setValue(H,"modelViewMatrix",J.modelViewMatrix),mt.setValue(H,"normalMatrix",J.normalMatrix),mt.setValue(H,"modelMatrix",J.matrixWorld),Gt}function th(w,P){w.ambientLightColor.needsUpdate=P,w.lightProbe.needsUpdate=P,w.directionalLights.needsUpdate=P,w.directionalLightShadows.needsUpdate=P,w.pointLights.needsUpdate=P,w.pointLightShadows.needsUpdate=P,w.spotLights.needsUpdate=P,w.spotLightShadows.needsUpdate=P,w.rectAreaLights.needsUpdate=P,w.hemisphereLights.needsUpdate=P}function nh(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return m},this.getActiveMipmapLevel=function(){return f},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(w,P,O){Ee.get(w.texture).__webglTexture=P,Ee.get(w.depthTexture).__webglTexture=O;let z=Ee.get(w);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=O===void 0,z.__autoAllocateDepthBuffer||w.useRenderToTexture&&(console.warn("render-to-texture extension was disabled because an external texture was provided"),w.useRenderToTexture=!1,w.useRenderbuffer=!0))},this.setRenderTargetFramebuffer=function(w,P){let O=Ee.get(w);O.__webglFramebuffer=P,O.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(w,P=0,O=0){T=w,m=P,f=O;let z=!0;if(w){let Pe=Ee.get(w);Pe.__useDefaultFramebuffer!==void 0?(de.bindFramebuffer(36160,null),z=!1):Pe.__webglFramebuffer===void 0?X.setupRenderTarget(w):Pe.__hasExternalTextures&&X.rebindTextures(w,Ee.get(w.texture).__webglTexture,Ee.get(w.depthTexture).__webglTexture)}let J=null,Ae=!1,Re=!1;if(w){let Pe=w.texture;(Pe.isDataTexture3D||Pe.isDataTexture2DArray)&&(Re=!0);let ke=Ee.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(J=ke[P],Ae=!0):w.useRenderbuffer?J=Ee.get(w).__webglMultisampledFramebuffer:J=ke,R.copy(w.viewport),L.copy(w.scissor),Z=w.scissorTest}else R.copy(N).multiplyScalar(y).floor(),L.copy(B).multiplyScalar(y).floor(),Z=F;if(de.bindFramebuffer(36160,J)&&we.drawBuffers&&z&&de.drawBuffers(w,J),de.viewport(R),de.scissor(L),de.setScissorTest(Z),Ae){let Pe=Ee.get(w.texture);H.framebufferTexture2D(36160,36064,34069+P,Pe.__webglTexture,O)}else if(Re){let Pe=Ee.get(w.texture),ke=P||0;H.framebufferTextureLayer(36160,36064,Pe.__webglTexture,O||0,ke)}M=-1},this.readRenderTargetPixels=function(w,P,O,z,J,Ae,Re){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Ee.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Re!==void 0&&(Ie=Ie[Re]),Ie){de.bindFramebuffer(36160,Ie);try{let Pe=w.texture,ke=Pe.format,ze=Pe.type;if(ke!==Mt&&Me.convert(ke)!==H.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Oe=ze===fi&&(ve.has("EXT_color_buffer_half_float")||we.isWebGL2&&ve.has("EXT_color_buffer_float"));if(ze!==xn&&Me.convert(ze)!==H.getParameter(35738)&&!(ze===In&&(we.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!Oe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H.checkFramebufferStatus(36160)===36053?P>=0&&P<=w.width-z&&O>=0&&O<=w.height-J&&H.readPixels(P,O,z,J,Me.convert(ke),Me.convert(ze),Ae):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{let Pe=T!==null?Ee.get(T).__webglFramebuffer:null;de.bindFramebuffer(36160,Pe)}}},this.copyFramebufferToTexture=function(w,P,O=0){if(P.isFramebufferTexture!==!0){console.error("THREE.WebGLRenderer: copyFramebufferToTexture() can only be used with FramebufferTexture.");return}let z=Math.pow(2,-O),J=Math.floor(P.image.width*z),Ae=Math.floor(P.image.height*z);X.setTexture2D(P,0),H.copyTexSubImage2D(3553,O,0,0,w.x,w.y,J,Ae),de.unbindTexture()},this.copyTextureToTexture=function(w,P,O,z=0){let J=P.image.width,Ae=P.image.height,Re=Me.convert(O.format),Ie=Me.convert(O.type);X.setTexture2D(O,0),H.pixelStorei(37440,O.flipY),H.pixelStorei(37441,O.premultiplyAlpha),H.pixelStorei(3317,O.unpackAlignment),P.isDataTexture?H.texSubImage2D(3553,z,w.x,w.y,J,Ae,Re,Ie,P.image.data):P.isCompressedTexture?H.compressedTexSubImage2D(3553,z,w.x,w.y,P.mipmaps[0].width,P.mipmaps[0].height,Re,P.mipmaps[0].data):H.texSubImage2D(3553,z,w.x,w.y,Re,Ie,P.image),z===0&&O.generateMipmaps&&H.generateMipmap(3553),de.unbindTexture()},this.copyTextureToTexture3D=function(w,P,O,z,J=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Ae=w.max.x-w.min.x+1,Re=w.max.y-w.min.y+1,Ie=w.max.z-w.min.z+1,Pe=Me.convert(z.format),ke=Me.convert(z.type),ze;if(z.isDataTexture3D)X.setTexture3D(z,0),ze=32879;else if(z.isDataTexture2DArray)X.setTexture2DArray(z,0),ze=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(37440,z.flipY),H.pixelStorei(37441,z.premultiplyAlpha),H.pixelStorei(3317,z.unpackAlignment);let Oe=H.getParameter(3314),tt=H.getParameter(32878),Rn=H.getParameter(3316),kn=H.getParameter(3315),He=H.getParameter(32877),Ht=O.isCompressedTexture?O.mipmaps[0]:O.image;H.pixelStorei(3314,Ht.width),H.pixelStorei(32878,Ht.height),H.pixelStorei(3316,w.min.x),H.pixelStorei(3315,w.min.y),H.pixelStorei(32877,w.min.z),O.isDataTexture||O.isDataTexture3D?H.texSubImage3D(ze,J,P.x,P.y,P.z,Ae,Re,Ie,Pe,ke,Ht.data):O.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(ze,J,P.x,P.y,P.z,Ae,Re,Ie,Pe,Ht.data)):H.texSubImage3D(ze,J,P.x,P.y,P.z,Ae,Re,Ie,Pe,ke,Ht),H.pixelStorei(3314,Oe),H.pixelStorei(32878,tt),H.pixelStorei(3316,Rn),H.pixelStorei(3315,kn),H.pixelStorei(32877,He),J===0&&z.generateMipmaps&&H.generateMipmap(ze),de.unbindTexture()},this.initTexture=function(w){X.setTexture2D(w,0),de.unbindTexture()},this.resetState=function(){m=0,f=0,T=null,de.reset(),ye.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Ge.prototype.isWebGLRenderer=!0;var Oo=class extends Ge{};Oo.prototype.isWebGL1Renderer=!0;var Uo=class s{constructor(e,t=25e-5){this.name="",this.color=new xe(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}};Uo.prototype.isFogExp2=!0;var Ho=class s{constructor(e,t=1,n=1e3){this.name="",this.color=new xe(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}};Ho.prototype.isFog=!0;var Ei=class extends Ye{constructor(){super(),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}};Ei.prototype.isScene=!0;var Bn=class{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Qi,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Ut()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ut()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ut()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}};Bn.prototype.isInterleavedBuffer=!0;var nt=new S,cr=class s{constructor(e,t,n,i=!1){this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)nt.x=this.getX(t),nt.y=this.getY(t),nt.z=this.getZ(t),nt.applyMatrix4(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nt.x=this.getX(t),nt.y=this.getY(t),nt.z=this.getZ(t),nt.applyNormalMatrix(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nt.x=this.getX(t),nt.y=this.getY(t),nt.z=this.getZ(t),nt.transformDirection(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new $e(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};cr.prototype.isInterleavedBufferAttribute=!0;var vs=class extends dt{constructor(e){super(),this.type="SpriteMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}};vs.prototype.isSpriteMaterial=!0;var si,Ui=new S,oi=new S,ai=new S,li=new K,Hi=new K,Yc=new be,Yr=new S,Gi=new S,Jr=new S,ic=new K,vo=new K,rc=new K,Go=class extends Ye{constructor(e){if(super(),this.type="Sprite",si===void 0){si=new je;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Bn(t,5);si.setIndex([0,1,2,0,2,3]),si.setAttribute("position",new cr(n,3,0,!1)),si.setAttribute("uv",new cr(n,2,3,!1))}this.geometry=si,this.material=e!==void 0?e:new vs,this.center=new K(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),oi.setFromMatrixScale(this.matrixWorld),Yc.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ai.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&oi.multiplyScalar(-ai.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;Zr(Yr.set(-.5,-.5,0),ai,o,oi,i,r),Zr(Gi.set(.5,-.5,0),ai,o,oi,i,r),Zr(Jr.set(.5,.5,0),ai,o,oi,i,r),ic.set(0,0),vo.set(1,0),rc.set(1,1);let a=e.ray.intersectTriangle(Yr,Gi,Jr,!1,Ui);if(a===null&&(Zr(Gi.set(-.5,.5,0),ai,o,oi,i,r),vo.set(0,1),a=e.ray.intersectTriangle(Yr,Jr,Gi,!1,Ui),a===null))return;let c=e.ray.origin.distanceTo(Ui);c<e.near||c>e.far||t.push({distance:c,point:Ui.clone(),uv:vt.getUV(Ui,Yr,Gi,Jr,ic,vo,rc,new K),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};Go.prototype.isSprite=!0;function Zr(s,e,t,n,i,r){li.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Hi.x=r*li.x-i*li.y,Hi.y=i*li.x+r*li.y):Hi.copy(li),s.copy(e),s.x+=Hi.x,s.y+=Hi.y,s.applyMatrix4(Yc)}var sc=new S,oc=new We,ac=new We,Nm=new S,lc=new be,_s=class extends ct{constructor(e,t){super(e,t),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new be,this.bindMatrixInverse=new be}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new We,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.x=t.getX(n),e.y=t.getY(n),e.z=t.getZ(n),e.w=t.getW(n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){let n=this.skeleton,i=this.geometry;oc.fromBufferAttribute(i.attributes.skinIndex,e),ac.fromBufferAttribute(i.attributes.skinWeight,e),sc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=ac.getComponent(r);if(o!==0){let a=oc.getComponent(r);lc.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Nm.copy(sc).applyMatrix4(lc),o)}}return t.applyMatrix4(this.bindMatrixInverse)}};_s.prototype.isSkinnedMesh=!0;var Vo=class extends Ye{constructor(){super(),this.type="Bone"}};Vo.prototype.isBone=!0;var ko=class extends pt{constructor(e=null,t=1,n=1,i,r,o,a,c,l=at,h=at,u,d){super(null,o,a,c,l,h,i,r,u,d),this.image={data:e,width:t,height:n},this.magFilter=l,this.minFilter=h,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};ko.prototype.isDataTexture=!0;var hr=class extends $e{constructor(e,t,n,i=1){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),super(e,t,n),this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}};hr.prototype.isInstancedBufferAttribute=!0;var cc=new be,hc=new be,$r=[],Vi=new ct,Wo=class extends ct{constructor(e,t,n){super(e,t),this.instanceMatrix=new hr(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(e){return super.copy(e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Vi.geometry=this.geometry,Vi.material=this.material,Vi.material!==void 0)for(let r=0;r<i;r++){this.getMatrixAt(r,cc),hc.multiplyMatrices(n,cc),Vi.matrixWorld=hc,Vi.raycast(e,$r);for(let o=0,a=$r.length;o<a;o++){let c=$r[o];c.instanceId=r,c.object=this,t.push(c)}$r.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new hr(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};Wo.prototype.isInstancedMesh=!0;var zn=class extends dt{constructor(e){super(),this.type="LineBasicMaterial",this.color=new xe(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this}};zn.prototype.isLineBasicMaterial=!0;var uc=new S,dc=new S,fc=new be,_o=new bn,jr=new wn,ur=class extends Ye{constructor(e=new je,t=new zn){super(),this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.isBufferGeometry)if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)uc.fromBufferAttribute(t,i-1),dc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=uc.distanceTo(dc);e.setAttribute("lineDistance",new rt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere),jr.applyMatrix4(i),jr.radius+=r,e.ray.intersectsSphere(jr)===!1)return;fc.copy(i).invert(),_o.copy(e.ray).applyMatrix4(fc);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new S,h=new S,u=new S,d=new S,p=this.isLineSegments?2:1;if(n.isBufferGeometry){let g=n.index,_=n.attributes.position;if(g!==null){let m=Math.max(0,o.start),f=Math.min(g.count,o.start+o.count);for(let T=m,M=f-1;T<M;T+=p){let E=g.getX(T),R=g.getX(T+1);if(l.fromBufferAttribute(_,E),h.fromBufferAttribute(_,R),_o.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let Z=e.ray.origin.distanceTo(d);Z<e.near||Z>e.far||t.push({distance:Z,point:u.clone().applyMatrix4(this.matrixWorld),index:T,face:null,faceIndex:null,object:this})}}else{let m=Math.max(0,o.start),f=Math.min(_.count,o.start+o.count);for(let T=m,M=f-1;T<M;T+=p){if(l.fromBufferAttribute(_,T),h.fromBufferAttribute(_,T+1),_o.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let R=e.ray.origin.distanceTo(d);R<e.near||R>e.far||t.push({distance:R,point:u.clone().applyMatrix4(this.matrixWorld),index:T,face:null,faceIndex:null,object:this})}}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){let e=this.geometry;if(e.isBufferGeometry){let t=e.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}else{let t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}};ur.prototype.isLine=!0;var pc=new S,mc=new S,dr=class extends ur{constructor(e,t){super(e,t),this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.isBufferGeometry)if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)pc.fromBufferAttribute(t,i),mc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+pc.distanceTo(mc);e.setAttribute("lineDistance",new rt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}};dr.prototype.isLineSegments=!0;var qo=class extends ur{constructor(e,t){super(e,t),this.type="LineLoop"}};qo.prototype.isLineLoop=!0;var Ms=class extends dt{constructor(e){super(),this.type="PointsMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this}};Ms.prototype.isPointsMaterial=!0;var gc=new be,Xo=new bn,Kr=new wn,Qr=new S,Yo=class extends Ye{constructor(e=new je,t=new Ms){super(),this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(i),Kr.radius+=r,e.ray.intersectsSphere(Kr)===!1)return;gc.copy(i).invert(),Xo.copy(e.ray).applyMatrix4(gc);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a;if(n.isBufferGeometry){let l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=d,x=p;g<x;g++){let _=l.getX(g);Qr.fromBufferAttribute(u,_),xc(Qr,_,c,i,e,t,this)}}else{let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,x=p;g<x;g++)Qr.fromBufferAttribute(u,g),xc(Qr,g,c,i,e,t,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){let e=this.geometry;if(e.isBufferGeometry){let t=e.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}else{let t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}};Yo.prototype.isPoints=!0;function xc(s,e,t,n,i,r,o){let a=Xo.distanceSqToPoint(s);if(a<t){let c=new S;Xo.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}var Jo=class extends pt{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l),this.minFilter=o!==void 0?o:xt,this.magFilter=r!==void 0?r:xt,this.generateMipmaps=!1;let h=this;function u(){h.needsUpdate=!0,e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){let e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}};Jo.prototype.isVideoTexture=!0;var Zo=class extends pt{constructor(e,t,n){super({width:e,height:t}),this.format=n,this.magFilter=at,this.minFilter=at,this.generateMipmaps=!1,this.needsUpdate=!0}};Zo.prototype.isFramebufferTexture=!0;var $o=class extends pt{constructor(e,t,n,i,r,o,a,c,l,h,u,d){super(null,o,a,c,l,h,i,r,u,d),this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}};$o.prototype.isCompressedTexture=!0;var fr=class extends pt{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l),this.needsUpdate=!0}};fr.prototype.isCanvasTexture=!0;var E0=new S,T0=new S,A0=new S,R0=new vt;var Et=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);let h=n[i],d=n[i+1]-h,p=(o-h)/d;return(i+p)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),c=t||(o.isVector2?new K:new S);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new S,i=[],r=[],o=[],a=new S,c=new be;for(let p=0;p<=e;p++){let g=p/e;i[p]=this.getTangentAt(g,new S)}r[0]=new S,o[0]=new S;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(bt(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,g))}o[p].crossVectors(i[p],r[p])}if(t===!0){let p=Math.acos(bt(r[0].dot(r[e]),-1,1));p/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],p*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ti=class extends Et{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t){let n=t||new K,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}};Ti.prototype.isEllipseCurve=!0;var ws=class extends Ti{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.type="ArcCurve"}};ws.prototype.isArcCurve=!0;function Wa(){let s=0,e=0,t=0,n=0;function i(r,o,a,c){s=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,p=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,p*=h,i(o,a,d,p)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+n*a}}}var es=new S,Mo=new Wa,wo=new Wa,bo=new Wa,bs=class extends Et{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new S){let n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(es.subVectors(i[0],i[1]).add(i[0]),l=es);let u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(es.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=es),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(d),p),_=Math.pow(d.distanceToSquared(h),p);x<1e-4&&(x=1),g<1e-4&&(g=x),_<1e-4&&(_=x),Mo.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,x,_),wo.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,x,_),bo.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,x,_)}else this.curveType==="catmullrom"&&(Mo.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),wo.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),bo.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Mo.calc(c),wo.calc(c),bo.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new S().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};bs.prototype.isCatmullRomCurve3=!0;function yc(s,e,t,n,i){let r=(n-e)*.5,o=(i-t)*.5,a=s*s,c=s*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*s+t}function Bm(s,e){let t=1-s;return t*t*e}function zm(s,e){return 2*(1-s)*s*e}function Om(s,e){return s*s*e}function Ji(s,e,t,n){return Bm(s,e)+zm(s,t)+Om(s,n)}function Um(s,e){let t=1-s;return t*t*t*e}function Hm(s,e){let t=1-s;return 3*t*t*s*e}function Gm(s,e){return 3*(1-s)*s*s*e}function Vm(s,e){return s*s*s*e}function Zi(s,e,t,n,i){return Um(s,e)+Hm(s,t)+Gm(s,n)+Vm(s,i)}var pr=class extends Et{constructor(e=new K,t=new K,n=new K,i=new K){super(),this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new K){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Zi(e,i.x,r.x,o.x,a.x),Zi(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}};pr.prototype.isCubicBezierCurve=!0;var Ss=class extends Et{constructor(e=new S,t=new S,n=new S,i=new S){super(),this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new S){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Zi(e,i.x,r.x,o.x,a.x),Zi(e,i.y,r.y,o.y,a.y),Zi(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}};Ss.prototype.isCubicBezierCurve3=!0;var Ai=class extends Et{constructor(e=new K,t=new K){super(),this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new K){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){let n=t||new K;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};Ai.prototype.isLineCurve=!0;var jo=class extends Et{constructor(e=new S,t=new S){super(),this.type="LineCurve3",this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new S){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},mr=class extends Et{constructor(e=new K,t=new K,n=new K){super(),this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new K){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Ji(e,i.x,r.x,o.x),Ji(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};mr.prototype.isQuadraticBezierCurve=!0;var Es=class extends Et{constructor(e=new S,t=new S,n=new S){super(),this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new S){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Ji(e,i.x,r.x,o.x),Ji(e,i.y,r.y,o.y),Ji(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};Es.prototype.isQuadraticBezierCurve3=!0;var gr=class extends Et{constructor(e=[]){super(),this.type="SplineCurve",this.points=e}getPoint(e,t=new K){let n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(yc(a,c.x,l.x,h.x,u.x),yc(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new K().fromArray(i))}return this}};gr.prototype.isSplineCurve=!0;var Jc=Object.freeze({__proto__:null,ArcCurve:ws,CatmullRomCurve3:bs,CubicBezierCurve:pr,CubicBezierCurve3:Ss,EllipseCurve:Ti,LineCurve:Ai,LineCurve3:jo,QuadraticBezierCurve:mr,QuadraticBezierCurve3:Es,SplineCurve:gr}),Ko=class extends Et{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Ai(t,e))}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o&&o.isEllipseCurve?e*2:o&&(o.isLineCurve||o.isLineCurve3)?1:o&&o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new Jc[i.type]().fromJSON(i))}return this}},Sn=class extends Ko{constructor(e){super(),this.type="Path",this.currentPoint=new K,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ai(this.currentPoint.clone(),new K(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new mr(this.currentPoint.clone(),new K(e,t),new K(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){let a=new pr(this.currentPoint.clone(),new K(e,t),new K(n,i),new K(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new gr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,r,o,a,c),this}absellipse(e,t,n,i,r,o,a,c){let l=new Ti(e,t,n,i,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},sn=class extends Sn{constructor(e){super(e),this.uuid=Ut(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Sn().fromJSON(i))}return this}},km={triangulate:function(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=Zc(s,0,i,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,p;if(n&&(r=Jm(s,e,r,t)),s.length>80*t){a=l=s[0],c=h=s[1];for(let g=t;g<i;g+=t)u=s[g],d=s[g+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);p=Math.max(l-a,h-c),p=p!==0?1/p:0}return xr(r,o,t,a,c,p),o}};function Zc(s,e,t,n,i){let r,o;if(i===s0(s,e,t,n)>0)for(r=e;r<t;r+=n)o=vc(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=vc(r,s[r],s[r+1],o);return o&&Os(o,o.next)&&(vr(o),o=o.next),o}function En(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Os(t,t.next)||et(t.prev,t,t.next)===0)){if(vr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function xr(s,e,t,n,i,r,o){if(!s)return;!o&&r&&Qm(s,n,i,r);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?qm(s,n,i,r):Wm(s)){e.push(c.i/t),e.push(s.i/t),e.push(l.i/t),vr(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=Xm(En(s),e,t),xr(s,e,t,n,i,r,2)):o===2&&Ym(s,e,t,n,i,r):xr(En(s),e,t,n,i,r,1);break}}}function Wm(s){let e=s.prev,t=s,n=s.next;if(et(e,t,n)>=0)return!1;let i=s.next.next;for(;i!==s.prev;){if(di(e.x,e.y,t.x,t.y,n.x,n.y,i.x,i.y)&&et(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function qm(s,e,t,n){let i=s.prev,r=s,o=s.next;if(et(i,r,o)>=0)return!1;let a=i.x<r.x?i.x<o.x?i.x:o.x:r.x<o.x?r.x:o.x,c=i.y<r.y?i.y<o.y?i.y:o.y:r.y<o.y?r.y:o.y,l=i.x>r.x?i.x>o.x?i.x:o.x:r.x>o.x?r.x:o.x,h=i.y>r.y?i.y>o.y?i.y:o.y:r.y>o.y?r.y:o.y,u=Qo(a,c,e,t,n),d=Qo(l,h,e,t,n),p=s.prevZ,g=s.nextZ;for(;p&&p.z>=u&&g&&g.z<=d;){if(p!==s.prev&&p!==s.next&&di(i.x,i.y,r.x,r.y,o.x,o.y,p.x,p.y)&&et(p.prev,p,p.next)>=0||(p=p.prevZ,g!==s.prev&&g!==s.next&&di(i.x,i.y,r.x,r.y,o.x,o.y,g.x,g.y)&&et(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;p&&p.z>=u;){if(p!==s.prev&&p!==s.next&&di(i.x,i.y,r.x,r.y,o.x,o.y,p.x,p.y)&&et(p.prev,p,p.next)>=0)return!1;p=p.prevZ}for(;g&&g.z<=d;){if(g!==s.prev&&g!==s.next&&di(i.x,i.y,r.x,r.y,o.x,o.y,g.x,g.y)&&et(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function Xm(s,e,t){let n=s;do{let i=n.prev,r=n.next.next;!Os(i,r)&&$c(i,n,n.next,r)&&yr(i,r)&&yr(r,i)&&(e.push(i.i/t),e.push(n.i/t),e.push(r.i/t),vr(n),vr(n.next),n=s=r),n=n.next}while(n!==s);return En(n)}function Ym(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&n0(o,a)){let c=jc(o,a);o=En(o,o.next),c=En(c,c.next),xr(o,e,t,n,i,r),xr(c,e,t,n,i,r);return}a=a.next}o=o.next}while(o!==s)}function Jm(s,e,t,n){let i=[],r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:s.length,l=Zc(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(t0(l));for(i.sort(Zm),r=0;r<i.length;r++)$m(i[r],t),t=En(t,t.next);return t}function Zm(s,e){return s.x-e.x}function $m(s,e){if(e=jm(s,e),e){let t=jc(e,s);En(e,e.next),En(t,t.next)}}function jm(s,e){let t=e,n=s.x,i=s.y,r=-1/0,o;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){let d=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r){if(r=d,d===n){if(i===t.y)return t;if(i===t.next.y)return t.next}o=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!o)return null;if(n===r)return o;let a=o,c=o.x,l=o.y,h=1/0,u;t=o;do n>=t.x&&t.x>=c&&n!==t.x&&di(i<l?n:r,i,c,l,i<l?r:n,i,t.x,t.y)&&(u=Math.abs(i-t.y)/(n-t.x),yr(t,s)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&Km(o,t)))&&(o=t,h=u)),t=t.next;while(t!==a);return o}function Km(s,e){return et(s.prev,s,e.prev)<0&&et(e.next,s,s.next)<0}function Qm(s,e,t,n){let i=s;do i.z===null&&(i.z=Qo(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,e0(i)}function e0(s){let e,t,n,i,r,o,a,c,l=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,l*=2}while(o>1);return s}function Qo(s,e,t,n,i){return s=32767*(s-t)*i,e=32767*(e-n)*i,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function t0(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function di(s,e,t,n,i,r,o,a){return(i-o)*(e-a)-(s-o)*(r-a)>=0&&(s-o)*(n-a)-(t-o)*(e-a)>=0&&(t-o)*(r-a)-(i-o)*(n-a)>=0}function n0(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!i0(s,e)&&(yr(s,e)&&yr(e,s)&&r0(s,e)&&(et(s.prev,s,e.prev)||et(s,e.prev,e))||Os(s,e)&&et(s.prev,s,s.next)>0&&et(e.prev,e,e.next)>0)}function et(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Os(s,e){return s.x===e.x&&s.y===e.y}function $c(s,e,t,n){let i=ns(et(s,e,t)),r=ns(et(s,e,n)),o=ns(et(t,n,s)),a=ns(et(t,n,e));return!!(i!==r&&o!==a||i===0&&ts(s,t,e)||r===0&&ts(s,n,e)||o===0&&ts(t,s,n)||a===0&&ts(t,e,n))}function ts(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function ns(s){return s>0?1:s<0?-1:0}function i0(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&$c(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function yr(s,e){return et(s.prev,s,s.next)<0?et(s,e,s.next)>=0&&et(s,s.prev,e)>=0:et(s,e,s.prev)<0||et(s,s.next,e)<0}function r0(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function jc(s,e){let t=new ea(s.i,s.x,s.y),n=new ea(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function vc(s,e,t,n){let i=new ea(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function vr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function ea(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function s0(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var _n=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];_c(e),Mc(n,e);let o=e.length;t.forEach(_c);for(let c=0;c<t.length;c++)i.push(o),o+=t[c].length,Mc(n,t[c]);let a=km.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function _c(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Mc(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var on=class s extends je{constructor(e=new sn([new K(.5,.5),new K(-.5,.5),new K(-.5,-.5),new K(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new rt(i,3)),this.setAttribute("uv",new rt(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,_=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,f=t.UVGenerator!==void 0?t.UVGenerator:o0;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),u=t.amount);let T,M=!1,E,R,L,Z;m&&(T=m.getSpacedPoints(h),M=!0,d=!1,E=m.computeFrenetFrames(h,!1),R=new S,L=new S,Z=new S),d||(_=0,p=0,g=0,x=0);let ce=a.extractPoints(l),$=ce.shape,y=ce.holes;if(!_n.isClockWise($)){$=$.reverse();for(let X=0,ie=y.length;X<ie;X++){let te=y[X];_n.isClockWise(te)&&(y[X]=te.reverse())}}let I=_n.triangulateShape($,y),N=$;for(let X=0,ie=y.length;X<ie;X++){let te=y[X];$=$.concat(te)}function B(X,ie,te){return ie||console.error("THREE.ExtrudeGeometry: vec does not exist"),ie.clone().multiplyScalar(te).add(X)}let F=$.length,U=I.length;function j(X,ie,te){let ue,ae,Se,pe=X.x-ie.x,De=X.y-ie.y,Ve=te.x-X.x,Ue=te.y-X.y,b=pe*pe+De*De,v=pe*Ue-De*Ve;if(Math.abs(v)>Number.EPSILON){let W=Math.sqrt(b),ne=Math.sqrt(Ve*Ve+Ue*Ue),me=ie.x-De/W,V=ie.y+pe/W,Me=te.x-Ue/ne,ye=te.y+Ve/ne,le=((Me-me)*Ue-(ye-V)*Ve)/(pe*Ue-De*Ve);ue=me+pe*le-X.x,ae=V+De*le-X.y;let oe=ue*ue+ae*ae;if(oe<=2)return new K(ue,ae);Se=Math.sqrt(oe/2)}else{let W=!1;pe>Number.EPSILON?Ve>Number.EPSILON&&(W=!0):pe<-Number.EPSILON?Ve<-Number.EPSILON&&(W=!0):Math.sign(De)===Math.sign(Ue)&&(W=!0),W?(ue=-De,ae=pe,Se=Math.sqrt(b)):(ue=pe,ae=De,Se=Math.sqrt(b/2))}return new K(ue/Se,ae/Se)}let he=[];for(let X=0,ie=N.length,te=ie-1,ue=X+1;X<ie;X++,te++,ue++)te===ie&&(te=0),ue===ie&&(ue=0),he[X]=j(N[X],N[te],N[ue]);let k=[],Y,re=he.concat();for(let X=0,ie=y.length;X<ie;X++){let te=y[X];Y=[];for(let ue=0,ae=te.length,Se=ae-1,pe=ue+1;ue<ae;ue++,Se++,pe++)Se===ae&&(Se=0),pe===ae&&(pe=0),Y[ue]=j(te[ue],te[Se],te[pe]);k.push(Y),re=re.concat(Y)}for(let X=0;X<_;X++){let ie=X/_,te=p*Math.cos(ie*Math.PI/2),ue=g*Math.sin(ie*Math.PI/2)+x;for(let ae=0,Se=N.length;ae<Se;ae++){let pe=B(N[ae],he[ae],ue);ve(pe.x,pe.y,-te)}for(let ae=0,Se=y.length;ae<Se;ae++){let pe=y[ae];Y=k[ae];for(let De=0,Ve=pe.length;De<Ve;De++){let Ue=B(pe[De],Y[De],ue);ve(Ue.x,Ue.y,-te)}}}let fe=g+x;for(let X=0;X<F;X++){let ie=d?B($[X],re[X],fe):$[X];M?(L.copy(E.normals[0]).multiplyScalar(ie.x),R.copy(E.binormals[0]).multiplyScalar(ie.y),Z.copy(T[0]).add(L).add(R),ve(Z.x,Z.y,Z.z)):ve(ie.x,ie.y,0)}for(let X=1;X<=h;X++)for(let ie=0;ie<F;ie++){let te=d?B($[ie],re[ie],fe):$[ie];M?(L.copy(E.normals[X]).multiplyScalar(te.x),R.copy(E.binormals[X]).multiplyScalar(te.y),Z.copy(T[X]).add(L).add(R),ve(Z.x,Z.y,Z.z)):ve(te.x,te.y,u/h*X)}for(let X=_-1;X>=0;X--){let ie=X/_,te=p*Math.cos(ie*Math.PI/2),ue=g*Math.sin(ie*Math.PI/2)+x;for(let ae=0,Se=N.length;ae<Se;ae++){let pe=B(N[ae],he[ae],ue);ve(pe.x,pe.y,u+te)}for(let ae=0,Se=y.length;ae<Se;ae++){let pe=y[ae];Y=k[ae];for(let De=0,Ve=pe.length;De<Ve;De++){let Ue=B(pe[De],Y[De],ue);M?ve(Ue.x,Ue.y+T[h-1].y,T[h-1].x+te):ve(Ue.x,Ue.y,u+te)}}}_e(),H();function _e(){let X=i.length/3;if(d){let ie=0,te=F*ie;for(let ue=0;ue<U;ue++){let ae=I[ue];we(ae[2]+te,ae[1]+te,ae[0]+te)}ie=h+_*2,te=F*ie;for(let ue=0;ue<U;ue++){let ae=I[ue];we(ae[0]+te,ae[1]+te,ae[2]+te)}}else{for(let ie=0;ie<U;ie++){let te=I[ie];we(te[2],te[1],te[0])}for(let ie=0;ie<U;ie++){let te=I[ie];we(te[0]+F*h,te[1]+F*h,te[2]+F*h)}}n.addGroup(X,i.length/3-X,0)}function H(){let X=i.length/3,ie=0;Ne(N,ie),ie+=N.length;for(let te=0,ue=y.length;te<ue;te++){let ae=y[te];Ne(ae,ie),ie+=ae.length}n.addGroup(X,i.length/3-X,1)}function Ne(X,ie){let te=X.length;for(;--te>=0;){let ue=te,ae=te-1;ae<0&&(ae=X.length-1);for(let Se=0,pe=h+_*2;Se<pe;Se++){let De=F*Se,Ve=F*(Se+1),Ue=ie+ue+De,b=ie+ae+De,v=ie+ae+Ve,W=ie+ue+Ve;de(Ue,b,v,W)}}}function ve(X,ie,te){c.push(X),c.push(ie),c.push(te)}function we(X,ie,te){Ce(X),Ce(ie),Ce(te);let ue=i.length/3,ae=f.generateTopUV(n,i,ue-3,ue-2,ue-1);Ee(ae[0]),Ee(ae[1]),Ee(ae[2])}function de(X,ie,te,ue){Ce(X),Ce(ie),Ce(ue),Ce(ie),Ce(te),Ce(ue);let ae=i.length/3,Se=f.generateSideWallUV(n,i,ae-6,ae-3,ae-2,ae-1);Ee(Se[0]),Ee(Se[1]),Ee(Se[3]),Ee(Se[1]),Ee(Se[2]),Ee(Se[3])}function Ce(X){i.push(c[X*3+0]),i.push(c[X*3+1]),i.push(c[X*3+2])}function Ee(X){r.push(X.x),r.push(X.y)}}}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return a0(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Jc[i.type]().fromJSON(i)),new s(n,e.options)}},o0={generateTopUV:function(s,e,t,n,i){let r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[i*3],h=e[i*3+1];return[new K(r,o),new K(a,c),new K(l,h)]},generateSideWallUV:function(s,e,t,n,i,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[i*3],p=e[i*3+1],g=e[i*3+2],x=e[r*3],_=e[r*3+1],m=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new K(o,1-c),new K(l,1-u),new K(d,1-g),new K(x,1-m)]:[new K(a,1-c),new K(h,1-u),new K(p,1-g),new K(_,1-m)]}};function a0(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var ta=class s extends je{constructor(e=new sn([new K(0,.5),new K(-.5,-.5),new K(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],r=[],o=[],a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new rt(i,3)),this.setAttribute("normal",new rt(r,3)),this.setAttribute("uv",new rt(o,2));function l(h){let u=i.length/3,d=h.extractPoints(t),p=d.shape,g=d.holes;_n.isClockWise(p)===!1&&(p=p.reverse());for(let _=0,m=g.length;_<m;_++){let f=g[_];_n.isClockWise(f)===!0&&(g[_]=f.reverse())}let x=_n.triangulateShape(p,g);for(let _=0,m=g.length;_<m;_++){let f=g[_];p=p.concat(f)}for(let _=0,m=p.length;_<m;_++){let f=p[_];i.push(f.x,f.y,0),r.push(0,0,1),o.push(f.x,f.y)}for(let _=0,m=x.length;_<m;_++){let f=x[_],T=f[0]+u,M=f[1]+u,E=f[2]+u;n.push(T,M,E),c+=3}}}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return l0(t,e)}static fromJSON(e,t){let n=[];for(let i=0,r=e.shapes.length;i<r;i++){let o=t[e.shapes[i]];n.push(o)}return new s(n,e.curveSegments)}};function l0(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){let i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}var na=class extends dt{constructor(e){super(),this.type="ShadowMaterial",this.color=new xe(0),this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this}};na.prototype.isShadowMaterial=!0;var On=class extends dt{constructor(e){super(),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pi,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}};On.prototype.isMeshStandardMaterial=!0;var ia=class extends On{constructor(e){super(),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new K(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return bt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.sheenColor=new xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new xe(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};ia.prototype.isMeshPhysicalMaterial=!0;var ra=class extends dt{constructor(e){super(),this.type="MeshPhongMaterial",this.color=new xe(16777215),this.specular=new xe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pi,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Fs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}};ra.prototype.isMeshPhongMaterial=!0;var sa=class extends dt{constructor(e){super(),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new xe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pi,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}};sa.prototype.isMeshToonMaterial=!0;var oa=class extends dt{constructor(e){super(),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pi,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};oa.prototype.isMeshNormalMaterial=!0;var aa=class extends dt{constructor(e){super(),this.type="MeshLambertMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Fs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}};aa.prototype.isMeshLambertMaterial=!0;var la=class extends dt{constructor(e){super(),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new xe(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pi,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this}};la.prototype.isMeshMatcapMaterial=!0;var ca=class extends zn{constructor(e){super(),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};ca.prototype.isLineDashedMaterial=!0;var Ze={arraySlice:function(s,e,t){return Ze.isTypedArray(s)?new s.constructor(s.subarray(e,t!==void 0?t:s.length)):s.slice(e,t)},convertArray:function(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)},isTypedArray:function(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)},getKeyframeOrder:function(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n},sortedArray:function(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i},flattenJSON:function(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)},subclip:function(s,e,t,n,i=30){let r=s.clone();r.name=e;let o=[];for(let c=0;c<r.tracks.length;++c){let l=r.tracks[c],h=l.getValueSize(),u=[],d=[];for(let p=0;p<l.times.length;++p){let g=l.times[p]*i;if(!(g<t||g>=n)){u.push(l.times[p]);for(let x=0;x<h;++x)d.push(l.values[p*h+x])}}u.length!==0&&(l.times=Ze.convertArray(u,l.times.constructor),l.values=Ze.convertArray(d,l.values.constructor),o.push(l))}r.tracks=o;let a=1/0;for(let c=0;c<r.tracks.length;++c)a>r.tracks[c].times[0]&&(a=r.tracks[c].times[0]);for(let c=0;c<r.tracks.length;++c)r.tracks[c].shift(-1*a);return r.resetDuration(),r},makeClipAdditive:function(s,e=0,t=s,n=30){n<=0&&(n=30);let i=t.tracks.length,r=e/n;for(let o=0;o<i;++o){let a=t.tracks[o],c=a.ValueTypeName;if(c==="bool"||c==="string")continue;let l=s.tracks.find(function(m){return m.name===a.name&&m.ValueTypeName===c});if(l===void 0)continue;let h=0,u=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let d=0,p=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=p/3);let g=a.times.length-1,x;if(r<=a.times[0]){let m=h,f=u-h;x=Ze.arraySlice(a.values,m,f)}else if(r>=a.times[g]){let m=g*u+h,f=m+u-h;x=Ze.arraySlice(a.values,m,f)}else{let m=a.createInterpolant(),f=h,T=u-h;m.evaluate(r),x=Ze.arraySlice(m.resultBuffer,f,T)}c==="quaternion"&&new yt().fromArray(x).normalize().conjugate().toArray(x);let _=l.times.length;for(let m=0;m<_;++m){let f=m*p+d;if(c==="quaternion")yt.multiplyQuaternionsFlat(l.values,f,x,0,l.values,f);else{let T=p-d*2;for(let M=0;M<T;++M)l.values[f+M]-=x[M]}}}return s.blendMode=Ic,s}},qt=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,e,r)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(i===void 0)return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,r,e)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}};qt.prototype.beforeStart_=qt.prototype.copySampleValue_;qt.prototype.afterEnd_=qt.prototype.copySampleValue_;var ha=class extends qt{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:hi,endingEnd:hi}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case ui:r=e,a=2*t-n;break;case cs:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ui:o=e,c=2*n-t;break;case cs:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),x=g*g,_=x*g,m=-d*_+2*d*x-d*g,f=(1+d)*_+(-1.5-2*d)*x+(-.5+d)*g+1,T=(-1-p)*_+(1.5+p)*x+.5*g,M=p*_-p*x;for(let E=0;E!==a;++E)r[E]=m*o[h+E]+f*o[l+E]+T*o[c+E]+M*o[u+E];return r}},Ts=class extends qt{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},ua=class extends qt{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Pt=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ze.convertArray(t,this.TimeBufferType),this.values=Ze.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ze.convertArray(e.times,Array),values:Ze.convertArray(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ua(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ts(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ha(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case as:t=this.InterpolantFactoryMethodDiscrete;break;case ls:t=this.InterpolantFactoryMethodLinear;break;case Ws:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return as;case this.InterpolantFactoryMethodLinear:return ls;case this.InterpolantFactoryMethodSmooth:return Ws}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=Ze.arraySlice(n,r,o),this.values=Ze.arraySlice(this.values,r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&Ze.isTypedArray(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=Ze.arraySlice(this.times),t=Ze.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===Ws,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{let u=a*n,d=u-n,p=u+n;for(let g=0;g!==n;++g){let x=t[u+g];if(x!==t[d+g]||x!==t[p+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let p=0;p!==n;++p)t[d+p]=t[u+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=Ze.arraySlice(e,0,o),this.values=Ze.arraySlice(t,0,o*n)):(this.times=e,this.values=t),this}clone(){let e=Ze.arraySlice(this.times,0),t=Ze.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Pt.prototype.TimeBufferType=Float32Array;Pt.prototype.ValueBufferType=Float32Array;Pt.prototype.DefaultInterpolation=ls;var Tn=class extends Pt{};Tn.prototype.ValueTypeName="bool";Tn.prototype.ValueBufferType=Array;Tn.prototype.DefaultInterpolation=as;Tn.prototype.InterpolantFactoryMethodLinear=void 0;Tn.prototype.InterpolantFactoryMethodSmooth=void 0;var As=class extends Pt{};As.prototype.ValueTypeName="color";var Ri=class extends Pt{};Ri.prototype.ValueTypeName="number";var da=class extends qt{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t),l=e*a;for(let h=l+a;l!==h;l+=4)yt.slerpFlat(r,0,o,l-a,o,l,c);return r}},Un=class extends Pt{InterpolantFactoryMethodLinear(e){return new da(this.times,this.values,this.getValueSize(),e)}};Un.prototype.ValueTypeName="quaternion";Un.prototype.DefaultInterpolation=ls;Un.prototype.InterpolantFactoryMethodSmooth=void 0;var An=class extends Pt{};An.prototype.ValueTypeName="string";An.prototype.ValueBufferType=Array;An.prototype.DefaultInterpolation=as;An.prototype.InterpolantFactoryMethodLinear=void 0;An.prototype.InterpolantFactoryMethodSmooth=void 0;var Ci=class extends Pt{};Ci.prototype.ValueTypeName="vector";var Rs=class{constructor(e,t=-1,n,i=Va){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Ut(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(h0(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Pt.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=Ze.getKeyframeOrder(c);c=Ze.sortedArray(c,1,h),l=Ze.sortedArray(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Ri(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(l)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,p,g,x){if(p.length!==0){let _=[],m=[];Ze.flattenJSON(p,_,m,g),_.length!==0&&x.push(new u(d,_,m))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let p={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)p[d[g].morphTargets[x]]=-1;for(let x in p){let _=[],m=[];for(let f=0;f!==d[g].morphTargets.length;++f){let T=d[g];_.push(T.time),m.push(T.morphTarget===x?1:0)}i.push(new Ri(".morphTargetInfluence["+x+"]",_,m))}c=p.length*(o||1)}else{let p=".bones["+t[u].name+"]";n(Ci,p+".position",d,"pos",i),n(Un,p+".quaternion",d,"rot",i),n(Ci,p+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function c0(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ri;case"vector":case"vector2":case"vector3":case"vector4":return Ci;case"color":return As;case"quaternion":return Un;case"bool":case"boolean":return Tn;case"string":return An}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function h0(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=c0(s.type);if(s.times===void 0){let t=[],n=[];Ze.flattenJSON(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var Li={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},fa=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let p=l[u],g=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},u0=new fa,Xt=class{constructor(e){this.manager=e!==void 0?e:u0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}},en={},pa=class extends Xt{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Li.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(en[e]!==void 0){en[e].push({onLoad:t,onProgress:n,onError:i});return}en[e]=[],en[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||l.body.getReader===void 0)return l;let h=en[e],u=l.body.getReader(),d=l.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0,x=0,_=new ReadableStream({start(m){f();function f(){u.read().then(({done:T,value:M})=>{if(T)m.close();else{x+=M.byteLength;let E=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:p});for(let R=0,L=h.length;R<L;R++){let Z=h[R];Z.onProgress&&Z.onProgress(E)}m.enqueue(M),f()}})}}});return new Response(_)}else throw Error(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{Li.add(e,l);let h=en[e];delete en[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onLoad&&p.onLoad(l)}}).catch(l=>{let h=en[e];if(h===void 0)throw this.manager.itemError(e),l;delete en[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Cs=class extends Xt{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Li.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=er("img");function c(){h(),Li.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}},ma=class extends Xt{constructor(e){super(e)}load(e,t,n,i){let r=new Mi,o=new Cs(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function c(l){o.load(e[l],function(h){r.images[l]=h,a++,a===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(let l=0;l<e.length;++l)c(l);return r}};var _r=class extends Xt{constructor(e){super(e)}load(e,t,n,i){let r=new pt,o=new Cs(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Dt=class extends Ye{constructor(e,t=1){super(),this.type="Light",this.color=new xe(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};Dt.prototype.isLight=!0;var ga=class extends Dt{constructor(e,t,n){super(e,n),this.type="HemisphereLight",this.position.copy(Ye.DefaultUp),this.updateMatrix(),this.groundColor=new xe(t)}copy(e){return Dt.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}};ga.prototype.isHemisphereLight=!0;var wc=new be,bc=new S,Sc=new S,Mr=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new K(512,512),this.map=null,this.mapPass=null,this.matrix=new be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wi,this._frameExtents=new K(1,1),this._viewportCount=1,this._viewports=[new We(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;bc.setFromMatrixPosition(e.matrixWorld),t.position.copy(bc),Sc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Sc),t.updateMatrixWorld(),wc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ls=class extends Mr{constructor(){super(new ut(50,1,.5,500)),this.focus=1}updateMatrices(e){let t=this.camera,n=Lo*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}};Ls.prototype.isSpotLightShadow=!0;var xa=class extends Dt{constructor(e,t,n=0,i=Math.PI/3,r=0,o=1){super(e,t),this.type="SpotLight",this.position.copy(Ye.DefaultUp),this.updateMatrix(),this.target=new Ye,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.shadow=new Ls}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};xa.prototype.isSpotLight=!0;var Ec=new be,ki=new S,So=new S,Ps=class extends Mr{constructor(){super(new ut(90,1,.5,500)),this._frameExtents=new K(4,2),this._viewportCount=6,this._viewports=[new We(2,1,1,1),new We(0,1,1,1),new We(3,1,1,1),new We(1,1,1,1),new We(3,0,1,1),new We(1,0,1,1)],this._cubeDirections=[new S(1,0,0),new S(-1,0,0),new S(0,0,1),new S(0,0,-1),new S(0,1,0),new S(0,-1,0)],this._cubeUps=[new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,0,1),new S(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ki.setFromMatrixPosition(e.matrixWorld),n.position.copy(ki),So.copy(n.position),So.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(So),n.updateMatrixWorld(),i.makeTranslation(-ki.x,-ki.y,-ki.z),Ec.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ec)}};Ps.prototype.isPointLightShadow=!0;var ya=class extends Dt{constructor(e,t,n=0,i=1){super(e,t),this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ps}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}};ya.prototype.isPointLight=!0;var Ds=class extends Mr{constructor(){super(new or(-5,5,5,-5,.5,500))}};Ds.prototype.isDirectionalLightShadow=!0;var Hn=class extends Dt{constructor(e,t){super(e,t),this.type="DirectionalLight",this.position.copy(Ye.DefaultUp),this.updateMatrix(),this.target=new Ye,this.shadow=new Ds}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};Hn.prototype.isDirectionalLight=!0;var wr=class extends Dt{constructor(e,t){super(e,t),this.type="AmbientLight"}};wr.prototype.isAmbientLight=!0;var va=class extends Dt{constructor(e,t,n=10,i=10){super(e,t),this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){let t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}};va.prototype.isRectAreaLight=!0;var Is=class{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new S)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){let n=e.x,i=e.y,r=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*i),t.addScaledVector(o[2],.488603*r),t.addScaledVector(o[3],.488603*n),t.addScaledVector(o[4],1.092548*(n*i)),t.addScaledVector(o[5],1.092548*(i*r)),t.addScaledVector(o[6],.315392*(3*r*r-1)),t.addScaledVector(o[7],1.092548*(n*r)),t.addScaledVector(o[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){let n=e.x,i=e.y,r=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*i),t.addScaledVector(o[2],2*.511664*r),t.addScaledVector(o[3],2*.511664*n),t.addScaledVector(o[4],2*.429043*n*i),t.addScaledVector(o[5],2*.429043*i*r),t.addScaledVector(o[6],.743125*r*r-.247708),t.addScaledVector(o[7],2*.429043*n*r),t.addScaledVector(o[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){let n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){let n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){let n=e.x,i=e.y,r=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*r,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*n*r,t[8]=.546274*(n*n-i*i)}};Is.prototype.isSphericalHarmonics3=!0;var br=class extends Dt{constructor(e=new Is,t=1){super(void 0,t),this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){let t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}};br.prototype.isLightProbe=!0;var _a=class{static decodeText(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Ma=class extends je{constructor(){super(),this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){let e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};Ma.prototype.isInstancedBufferGeometry=!0;var wa=class extends Xt{constructor(e){super(e),typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Li.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){Li.add(e,c),t&&t(c),r.manager.itemEnd(e)}).catch(function(c){i&&i(c),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}};wa.prototype.isImageBitmapLoader=!0;var is,d0={getContext:function(){return is===void 0&&(is=new(window.AudioContext||window.webkitAudioContext)),is},setContext:function(s){is=s}},ba=class extends Xt{constructor(e){super(e)}load(e,t,n,i){let r=this,o=new pa(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{let c=a.slice(0);d0.getContext().decodeAudioData(c,function(h){t(h)})}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}},Sa=class extends br{constructor(e,t,n=1){super(void 0,n);let i=new xe().set(e),r=new xe().set(t),o=new S(i.r,i.g,i.b),a=new S(r.r,r.g,r.b),c=Math.sqrt(Math.PI),l=c*Math.sqrt(.75);this.sh.coefficients[0].copy(o).add(a).multiplyScalar(c),this.sh.coefficients[1].copy(o).sub(a).multiplyScalar(l)}};Sa.prototype.isHemisphereLightProbe=!0;var Ea=class extends br{constructor(e,t=1){super(void 0,t);let n=new xe().set(e);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}};Ea.prototype.isAmbientLightProbe=!0;var Ta=class extends Ye{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;let t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}};var Aa=class{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0,t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}},Ra=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){yt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let o=this._workIndex*r;yt.multiplyQuaternionsFlat(e,o,e,t,e,n),yt.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){let o=1-i;for(let a=0;a!==r;++a){let c=t+a;e[c]=e[c]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*i}}},qa="\\[\\]\\.:\\/",f0=new RegExp("["+qa+"]","g"),Xa="[^"+qa+"]",p0="[^"+qa.replace("\\.","")+"]",m0=/((?:WC+[\/:])*)/.source.replace("WC",Xa),g0=/(WCOD+)?/.source.replace("WCOD",p0),x0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xa),y0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xa),v0=new RegExp("^"+m0+g0+x0+y0+"$"),_0=["material","materials","bones"],Ca=class{constructor(e,t,n){let i=n||Xe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Xe=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(f0,"")}static parseTrackName(e){let t=v0.exec(e);if(!t)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);_0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(!t||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[i];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Xe.Composite=Ca;Xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Xe.prototype.GetterByBindingType=[Xe.prototype._getValue_direct,Xe.prototype._getValue_array,Xe.prototype._getValue_arrayElement,Xe.prototype._getValue_toArray];Xe.prototype.SetterByBindingTypeAndVersioning=[[Xe.prototype._setValue_direct,Xe.prototype._setValue_direct_setNeedsUpdate,Xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_array,Xe.prototype._setValue_array_setNeedsUpdate,Xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_arrayElement,Xe.prototype._setValue_arrayElement_setNeedsUpdate,Xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_fromArray,Xe.prototype._setValue_fromArray_setNeedsUpdate,Xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var La=class{constructor(){this.uuid=Ut(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){let e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,o=r.length,a,c=e.length,l=this.nCachedObjects_;for(let h=0,u=arguments.length;h!==u;++h){let d=arguments[h],p=d.uuid,g=t[p];if(g===void 0){g=c++,t[p]=g,e.push(d);for(let x=0,_=o;x!==_;++x)r[x].push(new Xe(d,n[x],i[x]))}else if(g<l){a=e[g];let x=--l,_=e[x];t[_.uuid]=g,e[g]=_,t[p]=x,e[x]=d;for(let m=0,f=o;m!==f;++m){let T=r[m],M=T[x],E=T[g];T[g]=M,E===void 0&&(E=new Xe(d,n[m],i[m])),T[x]=E}}else e[g]!==a&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=l}remove(){let e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length,r=this.nCachedObjects_;for(let o=0,a=arguments.length;o!==a;++o){let c=arguments[o],l=c.uuid,h=t[l];if(h!==void 0&&h>=r){let u=r++,d=e[u];t[d.uuid]=h,e[h]=d,t[l]=u,e[u]=c;for(let p=0,g=i;p!==g;++p){let x=n[p],_=x[u],m=x[h];x[h]=_,x[u]=m}}}this.nCachedObjects_=r}uncache(){let e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length,r=this.nCachedObjects_,o=e.length;for(let a=0,c=arguments.length;a!==c;++a){let l=arguments[a],h=l.uuid,u=t[h];if(u!==void 0)if(delete t[h],u<r){let d=--r,p=e[d],g=--o,x=e[g];t[p.uuid]=u,e[u]=p,t[x.uuid]=d,e[d]=x,e.pop();for(let _=0,m=i;_!==m;++_){let f=n[_],T=f[d],M=f[g];f[u]=T,f[d]=M,f.pop()}}else{let d=--o,p=e[d];d>0&&(t[p.uuid]=u),e[u]=p,e.pop();for(let g=0,x=i;g!==x;++g){let _=n[g];_[u]=_[d],_.pop()}}}this.nCachedObjects_=r}subscribe_(e,t){let n=this._bindingsIndicesByPath,i=n[e],r=this._bindings;if(i!==void 0)return r[i];let o=this._paths,a=this._parsedPaths,c=this._objects,l=c.length,h=this.nCachedObjects_,u=new Array(l);i=r.length,n[e]=i,o.push(e),a.push(t),r.push(u);for(let d=h,p=c.length;d!==p;++d){let g=c[d];u[d]=new Xe(g,e,t)}return u}unsubscribe_(e){let t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){let i=this._paths,r=this._parsedPaths,o=this._bindings,a=o.length-1,c=o[a],l=e[a];t[l]=n,o[n]=c,o.pop(),r[n]=r[a],r.pop(),i[n]=i[a],i.pop()}}};La.prototype.isAnimationObjectGroup=!0;var Pa=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,o=r.length,a=new Array(o),c={endingStart:hi,endingEnd:hi};for(let l=0;l!==o;++l){let h=r[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Jh,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*n;if(c<0||n===0)return;this._startTime=null,t=n*c}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Ic:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case Va:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,o=n===Zh;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===Yh){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){let a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=ui,i.endingEnd=ui):(e?i.endingStart=this.zeroSlopeAtStart?ui:hi:i.endingStart=cs,t?i.endingEnd=this.zeroSlopeAtEnd?ui:hi:i.endingEnd=cs)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=t,a[1]=r+e,c[1]=n,this}},Da=class extends tn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){let d=i[u],p=d.name,g=h[p];if(g!==void 0)++g.referenceCount,o[u]=g;else{if(g=o[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,p));continue}let x=t&&t._propertyBindings[u].binding.parsedPath;g=new Ra(Xe.create(n,p,x),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,p),o[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;let u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Ts(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,o=typeof e=="string"?Rs.findByName(i,e):e,a=o!==null?o.uuid:e,c=this._actionsByClip[a],l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Va),c!==void 0){let u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;let h=new Pa(this,o,t,n);return this._bindAction(h,l),this._addInactiveAction(h,a,r),h}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?Rs.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,r,o);let a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){let l=o[a];this._deactivateAction(l);let h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};Da.prototype._controlInterpolantsResultBuffer=new Float32Array(1);var Ia=class s{constructor(e){typeof e=="string"&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),e=arguments[1]),this.value=e}clone(){return new s(this.value.clone===void 0?this.value:this.value.clone())}},Fa=class extends Bn{constructor(e,t,n=1){super(e,t),this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}};Fa.prototype.isInstancedInterleavedBuffer=!0;var Na=class{constructor(e,t,n,i,r){this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=r,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}};Na.prototype.isGLBufferAttribute=!0;var Tc=new K,Gn=class{constructor(e=new K(1/0,1/0),t=new K(-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Tc.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Tc.copy(e).clamp(this.min,this.max).sub(e).length()}intersect(e){return this.min.max(e.min),this.max.min(e.max),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};Gn.prototype.isBox2=!0;var Ac=new S,rs=new S,Ba=class{constructor(e=new S,t=new S){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Ac.subVectors(e,this.start),rs.subVectors(this.end,this.start);let n=rs.dot(rs),r=rs.dot(Ac)/n;return t&&(r=bt(r,0,1)),r}closestPointToPoint(e,t,n){let i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var pn=new S,ss=new be,Eo=new be,za=class extends dr{constructor(e){let t=Kc(e),n=new je,i=[],r=[],o=new xe(0,0,1),a=new xe(0,1,0);for(let l=0;l<t.length;l++){let h=t[l];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(o.r,o.g,o.b),r.push(a.r,a.g,a.b))}n.setAttribute("position",new rt(i,3)),n.setAttribute("color",new rt(r,3));let c=new zn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,c),this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){let t=this.bones,n=this.geometry,i=n.getAttribute("position");Eo.copy(this.root.matrixWorld).invert();for(let r=0,o=0;r<t.length;r++){let a=t[r];a.parent&&a.parent.isBone&&(ss.multiplyMatrices(Eo,a.matrixWorld),pn.setFromMatrixPosition(ss),i.setXYZ(o,pn.x,pn.y,pn.z),ss.multiplyMatrices(Eo,a.parent.matrixWorld),pn.setFromMatrixPosition(ss),i.setXYZ(o+1,pn.x,pn.y,pn.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}};function Kc(s){let e=[];s&&s.isBone&&e.push(s);for(let t=0;t<s.children.length;t++)e.push.apply(e,Kc(s.children[t]));return e}var Oa=class extends dr{constructor(e=10,t=10,n=4473924,i=8947848){n=new xe(n),i=new xe(i);let r=t/2,o=e/t,a=e/2,c=[],l=[];for(let d=0,p=0,g=-a;d<=t;d++,g+=o){c.push(-a,0,g,a,0,g),c.push(g,0,-a,g,0,a);let x=d===r?n:i;x.toArray(l,p),p+=3,x.toArray(l,p),p+=3,x.toArray(l,p),p+=3,x.toArray(l,p),p+=3}let h=new je;h.setAttribute("position",new rt(c,3)),h.setAttribute("color",new rt(l,3));let u=new zn({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}};var M0=new Float32Array(1),C0=new Int32Array(M0.buffer);Et.create=function(s,e){return console.log("THREE.Curve.create() has been deprecated"),s.prototype=Object.create(Et.prototype),s.prototype.constructor=s,s.prototype.getPoint=e,s};Sn.prototype.fromPoints=function(s){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(s)};Oa.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};za.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};Xt.prototype.extractUrlBase=function(s){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),_a.extractUrlBase(s)};Xt.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};Gn.prototype.center=function(s){return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),this.getCenter(s)};Gn.prototype.empty=function(){return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Gn.prototype.isIntersectionBox=function(s){return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(s)};Gn.prototype.size=function(s){return console.warn("THREE.Box2: .size() has been renamed to .getSize()."),this.getSize(s)};Ct.prototype.center=function(s){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(s)};Ct.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Ct.prototype.isIntersectionBox=function(s){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(s)};Ct.prototype.isIntersectionSphere=function(s){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(s)};Ct.prototype.size=function(s){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(s)};wn.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};wi.prototype.setFromMatrix=function(s){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(s)};Ba.prototype.center=function(s){return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."),this.getCenter(s)};lt.prototype.flattenToArrayOffset=function(s,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(s,e)};lt.prototype.multiplyVector3=function(s){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),s.applyMatrix3(this)};lt.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};lt.prototype.applyToBufferAttribute=function(s){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),s.applyMatrix3(this)};lt.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};lt.prototype.getInverse=function(s){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(s).invert()};be.prototype.extractPosition=function(s){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(s)};be.prototype.flattenToArrayOffset=function(s,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(s,e)};be.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new S().setFromMatrixColumn(this,3)};be.prototype.setRotationFromQuaternion=function(s){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(s)};be.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};be.prototype.multiplyVector3=function(s){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};be.prototype.multiplyVector4=function(s){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};be.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};be.prototype.rotateAxis=function(s){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),s.transformDirection(this)};be.prototype.crossVector=function(s){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};be.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};be.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};be.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};be.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};be.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};be.prototype.applyToBufferAttribute=function(s){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};be.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};be.prototype.makeFrustum=function(s,e,t,n,i,r){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(s,e,n,t,i,r)};be.prototype.getInverse=function(s){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(s).invert()};zt.prototype.isIntersectionLine=function(s){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(s)};yt.prototype.multiplyVector3=function(s){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),s.applyQuaternion(this)};yt.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};bn.prototype.isIntersectionBox=function(s){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(s)};bn.prototype.isIntersectionPlane=function(s){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(s)};bn.prototype.isIntersectionSphere=function(s){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(s)};vt.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};vt.prototype.barycoordFromPoint=function(s,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(s,e)};vt.prototype.midpoint=function(s){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(s)};vt.prototypenormal=function(s){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(s)};vt.prototype.plane=function(s){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(s)};vt.barycoordFromPoint=function(s,e,t,n,i){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),vt.getBarycoord(s,e,t,n,i)};vt.normal=function(s,e,t,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),vt.getNormal(s,e,t,n)};sn.prototype.extractAllPoints=function(s){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(s)};sn.prototype.extrude=function(s){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new on(this,s)};sn.prototype.makeGeometry=function(s){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new ta(this,s)};K.prototype.fromAttribute=function(s,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,e,t)};K.prototype.distanceToManhattan=function(s){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(s)};K.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};S.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};S.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};S.prototype.getPositionFromMatrix=function(s){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(s)};S.prototype.getScaleFromMatrix=function(s){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(s)};S.prototype.getColumnFromMatrix=function(s,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,s)};S.prototype.applyProjection=function(s){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(s)};S.prototype.fromAttribute=function(s,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,e,t)};S.prototype.distanceToManhattan=function(s){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(s)};S.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};We.prototype.fromAttribute=function(s,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,e,t)};We.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Ye.prototype.getChildByName=function(s){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(s)};Ye.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};Ye.prototype.translate=function(s,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,s)};Ye.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};Ye.prototype.applyMatrix=function(s){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(s)};Object.defineProperties(Ye.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(s){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=s}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});ct.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(ct.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),$h},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});_s.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};ut.prototype.setLens=function(s,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(s)};Object.defineProperties(Dt.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(s){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=s}},shadowCameraLeft:{set:function(s){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=s}},shadowCameraRight:{set:function(s){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=s}},shadowCameraTop:{set:function(s){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=s}},shadowCameraBottom:{set:function(s){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=s}},shadowCameraNear:{set:function(s){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=s}},shadowCameraFar:{set:function(s){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=s}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(s){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=s}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(s){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=s}},shadowMapHeight:{set:function(s){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=s}}});Object.defineProperties($e.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===hs},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(hs)}}});$e.prototype.setDynamic=function(s){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(s===!0?hs:Qi),this};$e.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},$e.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};je.prototype.addIndex=function(s){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(s)};je.prototype.addAttribute=function(s,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(s,new $e(arguments[1],arguments[2]))):s==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(s,e)};je.prototype.addDrawCall=function(s,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(s,e)};je.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};je.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};je.prototype.removeAttribute=function(s){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(s)};je.prototype.applyMatrix=function(s){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(s)};Object.defineProperties(je.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});Bn.prototype.setDynamic=function(s){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(s===!0?hs:Qi),this};Bn.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};on.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};on.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};on.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};Ei.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};Ia.prototype.onUpdate=function(){return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."),this};Object.defineProperties(dt.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new xe}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(s){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=s===Cc}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(s){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=s}},vertexTangents:{get:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")},set:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}});Object.defineProperties(rn.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(s){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=s}}});Ge.prototype.clearTarget=function(s,e,t,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(s),this.clear(e,t,n)};Ge.prototype.animate=function(s){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(s)};Ge.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};Ge.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};Ge.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};Ge.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};Ge.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};Ge.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};Ge.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};Ge.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};Ge.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};Ge.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};Ge.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};Ge.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};Ge.prototype.enableScissorTest=function(s){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(s)};Ge.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};Ge.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};Ge.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};Ge.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};Ge.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};Ge.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};Ge.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};Ge.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};Ge.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};Ge.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(Ge.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(s){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=s}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(s){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=s}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(s){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=s===!0?qe:Mn}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}},gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});Object.defineProperties(Xc.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(St.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(s){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=s}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(s){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=s}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(s){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=s}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(s){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=s}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(s){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=s}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(s){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=s}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(s){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=s}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(s){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=s}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(s){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=s}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(s){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=s}}});Ta.prototype.load=function(s){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");let e=this;return new ba().load(s,function(n){e.setBuffer(n)}),this};Aa.prototype.getData=function(){return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."),this.getFrequencyData()};sr.prototype.updateCubeMap=function(s,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(s,e)};sr.prototype.clear=function(s,e,t,n){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(s,e,t,n)};nn.crossOrigin=void 0;nn.loadTexture=function(s,e,t,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");let i=new _r;i.setCrossOrigin(this.crossOrigin);let r=i.load(s,t,void 0,n);return e&&(r.mapping=e),r};nn.loadTextureCube=function(s,e,t,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");let i=new ma;i.setCrossOrigin(this.crossOrigin);let r=i.load(s,t,void 0,n);return e&&(r.mapping=e),r};nn.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};nn.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ua}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ua);var Qc=[{cls:"cls-2",contours:[{pts:[[67.05,77.74],[66.718,77.958],[66.384,78.172],[66.05,78.382],[65.714,78.59],[65.378,78.794],[65.04,78.995],[64.701,79.192],[64.36,79.386],[64.019,79.577],[63.675,79.765],[63.331,79.949],[62.985,80.131],[62.637,80.309],[62.287,80.483],[61.936,80.655],[61.583,80.823],[61.229,80.989],[60.872,81.151],[60.514,81.31],[60.153,81.466],[59.791,81.618],[59.428,81.767],[59.063,81.913],[58.698,82.056],[58.331,82.195],[57.963,82.331],[57.593,82.464],[57.223,82.593],[56.851,82.72],[56.479,82.843],[56.105,82.962],[55.73,83.078],[55.355,83.191],[54.978,83.301],[54.6,83.407],[54.222,83.51],[53.842,83.609],[53.462,83.705],[53.08,83.797],[52.698,83.886],[52.315,83.972],[51.931,84.054],[51.547,84.132],[51.162,84.207],[50.775,84.279],[50.389,84.347],[49.998,84.411],[49.606,84.472],[49.215,84.529],[48.823,84.583],[48.431,84.633],[48.039,84.679],[47.647,84.722],[47.255,84.762],[46.862,84.797],[46.47,84.83],[46.077,84.858],[45.685,84.883],[45.293,84.905],[44.9,84.923],[44.508,84.937],[44.116,84.948],[43.723,84.955],[43.331,84.959],[42.94,84.959],[42.548,84.956],[42.156,84.949],[41.765,84.938],[41.374,84.924],[40.983,84.907],[40.592,84.886],[40.202,84.862],[39.812,84.834],[39.423,84.802],[39.033,84.767],[38.645,84.729],[38.256,84.687],[37.868,84.641],[37.48,84.592],[37.093,84.54],[36.707,84.484],[36.321,84.425],[35.935,84.362],[35.55,84.295],[35.166,84.226],[34.782,84.152],[34.399,84.076],[34.016,83.996],[33.634,83.912],[33.253,83.825],[32.873,83.735],[32.493,83.641],[32.114,83.543],[31.736,83.442],[31.358,83.338],[30.982,83.231],[30.606,83.12],[30.231,83.005],[29.857,82.887],[29.484,82.766],[29.112,82.641],[28.741,82.513],[28.371,82.382],[28.001,82.247],[27.633,82.108],[27.266,81.967],[26.9,81.822],[26.535,81.673],[26.171,81.522],[25.808,81.366],[25.447,81.208],[25.086,81.046],[24.727,80.881],[24.369,80.712],[24.015,80.542],[23.662,80.368],[23.312,80.19],[22.963,80.01],[22.617,79.826],[22.272,79.639],[21.93,79.448],[21.589,79.255],[21.25,79.058],[20.913,78.858],[20.578,78.655],[20.245,78.449],[19.913,78.239],[19.584,78.027],[19.256,77.812],[18.929,77.593],[18.605,77.372],[18.282,77.148],[17.96,76.92],[17.638,76.688],[17.318,76.453],[17.001,76.216],[16.685,75.976],[16.373,75.734],[16.063,75.489],[15.755,75.241],[15.45,74.991],[15.147,74.739],[14.847,74.484],[14.55,74.227],[14.255,73.967],[13.962,73.705],[13.673,73.44],[13.385,73.173],[13.101,72.904],[12.819,72.632],[12.539,72.358],[12.263,72.082],[11.989,71.803],[11.717,71.522],[11.449,71.238],[11.183,70.952],[10.92,70.664],[10.659,70.374],[10.401,70.081],[10.147,69.786],[9.894,69.489],[9.645,69.189],[9.398,68.888],[9.154,68.584],[8.913,68.278],[8.675,67.969],[8.44,67.659],[8.208,67.346],[7.978,67.031],[7.751,66.714],[7.527,66.395],[7.307,66.074],[7.089,65.75],[6.874,65.425],[6.662,65.097],[6.453,64.768],[6.246,64.436],[6.043,64.102],[5.843,63.766],[5.646,63.428],[5.452,63.088],[5.261,62.747],[5.073,62.403],[4.888,62.057],[4.707,61.709],[4.528,61.359],[4.352,61.007],[4.18,60.653],[4.011,60.298],[3.844,59.94],[3.681,59.581],[3.522,59.219],[3.365,58.856],[3.211,58.491],[3.061,58.124],[2.914,57.755],[2.771,57.384],[2.63,57.012],[2.493,56.638],[2.36,56.265],[2.231,55.891],[2.105,55.516],[1.983,55.14],[1.865,54.763],[1.75,54.385],[1.639,54.006],[1.532,53.627],[1.428,53.247],[1.328,52.866],[1.231,52.485],[1.138,52.103],[1.049,51.72],[.964,51.336],[.882,50.952],[.803,50.567],[.729,50.182],[.658,49.797],[.59,49.41],[.527,49.024],[.467,48.637],[.41,48.249],[.357,47.861],[.308,47.473],[.263,47.084],[.221,46.695],[.182,46.306],[.148,45.917],[.117,45.527],[.09,45.137],[.066,44.747],[.046,44.357],[.029,43.967],[.016,43.576],[.007,43.186],[.002,42.795],[-0,42.405],[.002,42.014],[.007,41.624],[.016,41.234],[.029,40.843],[.045,40.453],[.065,40.063],[.088,39.673],[.116,39.284],[.146,38.894],[.181,38.505],[.219,38.116],[.261,37.727],[.306,37.339],[.355,36.951],[.407,36.564],[.464,36.177],[.524,35.79],[.587,35.404],[.654,35.018],[.725,34.633],[.799,34.248],[.877,33.864],[.959,33.48],[1.044,33.098],[1.133,32.715],[1.226,32.334],[1.322,31.953],[1.422,31.573],[1.525,31.194],[1.632,30.815],[1.743,30.437],[1.857,30.06],[1.975,29.684],[2.096,29.309],[2.222,28.935],[2.35,28.562],[2.483,28.189],[2.619,27.818],[2.759,27.448],[2.902,27.078],[3.049,26.71],[3.199,26.345],[3.351,25.983],[3.506,25.622],[3.665,25.262],[3.826,24.905],[3.991,24.549],[4.159,24.194],[4.33,23.841],[4.504,23.49],[4.682,23.141],[4.863,22.793],[5.047,22.447],[5.235,22.103],[5.426,21.761],[5.62,21.42],[5.818,21.081],[6.02,20.744],[6.225,20.409],[6.433,20.076],[6.645,19.745],[6.861,19.416],[7.079,19.088],[7.3,18.763],[7.523,18.439],[7.749,18.119],[7.978,17.8],[8.21,17.484],[8.444,17.169],[8.68,16.858],[8.92,16.548],[9.163,16.241],[9.408,15.936],[9.656,15.633],[9.907,15.332],[10.162,15.034],[10.419,14.738],[10.679,14.445],[10.942,14.154],[11.209,13.865],[11.478,13.578],[11.751,13.294],[12.027,13.012],[12.307,12.73],[12.588,12.452],[12.872,12.177],[13.158,11.904],[13.445,11.634],[13.735,11.367],[14.027,11.103],[14.321,10.841],[14.617,10.583],[14.915,10.327],[15.215,10.075],[15.517,9.825],[15.821,9.578],[16.127,9.333],[16.435,9.092],[16.745,8.854],[17.057,8.618],[17.371,8.386],[17.687,8.156],[18.005,7.929],[18.325,7.705],[18.647,7.484],[18.971,7.266],[19.297,7.051],[19.624,6.839],[19.954,6.629],[20.286,6.423],[20.619,6.22],[20.955,6.019],[21.292,5.822],[21.631,5.627],[21.972,5.435],[22.315,5.247],[22.66,5.061],[23.007,4.878],[23.355,4.699],[23.706,4.522],[24.058,4.348],[24.412,4.178],[24.768,4.01],[25.126,3.845],[25.485,3.684],[25.847,3.525],[26.21,3.369],[26.575,3.217],[26.942,3.067],[27.31,2.923],[27.677,2.784],[28.045,2.648],[28.413,2.517],[28.782,2.388],[29.152,2.264],[29.523,2.142],[29.896,2.023],[30.271,1.907],[30.648,1.793],[31.027,1.681],[31.406,1.573],[31.785,1.468],[32.165,1.369],[32.545,1.273],[32.926,1.182],[33.308,1.094],[33.69,1.01],[34.073,.931],[34.457,.854],[34.841,.782],[35.226,.713],[35.613,.647],[35.999,.584],[36.387,.524],[36.776,.468],[37.166,.414],[37.557,.363],[37.948,.314],[38.341,.269],[38.733,.226],[39.125,.187],[39.517,.152],[39.909,.121],[40.301,.093],[40.692,.069],[41.084,.048],[41.475,.031],[41.866,.018],[42.258,.009],[42.649,.002],[43.04,0],[43.431,.001],[43.823,.006],[44.214,.014],[44.605,.026],[44.997,.041],[45.388,.06],[45.78,.083],[46.172,.109],[46.563,.138],[46.955,.171],[47.347,.208],[47.74,.248],[48.15,.294],[48.562,.343],[48.968,.394],[49.369,.448],[49.765,.505],[50.156,.564],[50.544,.627],[50.927,.691],[51.308,.759],[51.685,.83],[52.059,.904],[52.432,.981],[52.802,1.062],[53.171,1.146],[53.539,1.233],[53.906,1.324],[54.273,1.418],[54.64,1.517],[55.007,1.619],[55.375,1.724],[55.745,1.834],[56.116,1.948],[56.489,2.066],[56.864,2.188],[57.242,2.315],[57.623,2.446],[58.007,2.581],[58.396,2.721],[58.783,2.866],[59.145,3.017],[59.507,3.168],[59.869,3.319],[60.232,3.47],[60.594,3.622],[60.958,3.775],[61.318,3.934],[61.675,4.098],[62.028,4.265],[62.378,4.437],[62.726,4.612],[63.073,4.791],[63.42,4.974],[63.766,5.159],[64.113,5.348],[64.457,5.539],[64.797,5.731],[65.135,5.927],[65.471,6.126],[65.806,6.329],[66.139,6.534],[66.471,6.744],[66.801,6.956],[67.129,7.172],[67.455,7.39],[67.78,7.612],[68.102,7.837],[68.423,8.065],[68.742,8.296],[69.058,8.53],[69.373,8.767],[69.686,9.006],[69.996,9.249],[70.304,9.494],[70.611,9.742],[70.914,9.992],[71.216,10.245],[71.515,10.501],[71.812,10.759],[72.107,11.019],[72.399,11.282],[72.688,11.548],[72.975,11.815],[73.259,12.085],[73.541,12.358],[73.82,12.632],[74.096,12.909],[74.37,13.187],[74.641,13.468],[74.901,13.761],[75.159,14.057],[75.417,14.353],[75.675,14.648],[75.933,14.944],[76.191,15.24],[76.449,15.535],[76.708,15.831],[76.965,16.127],[77.209,16.435],[77.451,16.745],[77.689,17.056],[77.924,17.37],[78.157,17.685],[78.387,18.003],[78.614,18.322],[78.838,18.643],[79.059,18.967],[79.277,19.292],[79.492,19.62],[79.704,19.95],[79.913,20.283],[80.119,20.617],[80.323,20.955],[80.522,21.295],[80.706,21.641],[80.89,21.988],[81.073,22.335],[81.257,22.682],[81.441,23.029],[81.624,23.376],[81.808,23.723],[81.991,24.069],[82.155,24.426],[82.31,24.787],[82.464,25.147],[82.619,25.508],[82.773,25.869],[82.928,26.23],[83.082,26.591],[83.236,26.951],[83.391,27.312],[83.532,27.678],[83.667,28.047],[83.799,28.416],[83.928,28.786],[84.053,29.158],[84.176,29.53],[84.295,29.904],[84.41,30.278],[84.522,30.654],[84.63,31.031],[84.735,31.409],[84.836,31.788],[84.934,32.168],[85.028,32.55],[85.117,32.932],[85.203,33.316],[85.285,33.701],[85.364,34.087],[85.439,34.474],[85.511,34.862],[85.579,35.25],[85.644,35.638],[85.705,36.026],[85.762,36.415],[85.816,36.805],[85.866,37.194],[85.913,37.584],[85.956,37.974],[85.995,38.365],[86.031,38.755],[86.063,39.146],[86.092,39.537],[86.116,39.928],[86.138,40.319],[86.155,40.711],[86.169,41.102],[86.18,41.493],[86.186,41.885],[86.189,42.276],[86.189,42.668],[86.184,43.059],[86.177,43.451],[86.165,43.842],[86.15,44.233],[86.131,44.624],[86.108,45.015],[86.082,45.406],[86.052,45.796],[86.019,46.186],[85.981,46.576],[85.941,46.966],[85.896,47.355],[85.848,47.745],[85.796,48.133],[85.74,48.522],[85.681,48.91],[85.618,49.297],[85.551,49.685],[85.481,50.071],[85.406,50.457],[85.329,50.843],[85.247,51.228],[85.162,51.613],[85.073,51.997],[84.977,52.379],[84.87,52.757],[84.763,53.134],[84.655,53.512],[84.548,53.889],[84.441,54.267],[84.333,54.644],[84.226,55.022],[84.118,55.399],[84.008,55.776],[83.88,56.15],[83.75,56.522],[83.615,56.893],[83.478,57.262],[83.337,57.629],[83.193,57.995],[83.045,58.36],[82.894,58.723],[82.74,59.084],[82.582,59.443],[82.421,59.801],[82.257,60.158],[82.089,60.512],[81.919,60.865],[81.745,61.216],[81.567,61.566],[81.387,61.913],[81.203,62.259],[81.017,62.603],[80.827,62.945],[80.633,63.286],[80.437,63.624],[80.238,63.961],[80.035,64.296],[79.83,64.629],[79.621,64.959],[79.409,65.288],[79.194,65.615],[78.977,65.94],[78.756,66.263],[78.532,66.584],[78.305,66.903],[78.075,67.22],[77.842,67.535],[77.606,67.848],[77.367,68.158],[77.125,68.467],[76.881,68.773],[76.633,69.077],[76.382,69.379],[76.129,69.679],[75.873,69.976],[75.614,70.271],[75.352,70.564],[75.087,70.855],[74.819,71.143],[74.549,71.429],[74.275,71.713],[73.999,71.994],[73.721,72.273],[73.439,72.549],[73.155,72.823],[72.872,73.092],[72.587,73.358],[72.299,73.623],[72.009,73.885],[71.717,74.146],[71.423,74.404],[71.126,74.659],[70.827,74.912],[70.525,75.163],[70.221,75.411],[69.915,75.657],[69.606,75.9],[69.295,76.14],[68.982,76.378],[68.666,76.612],[68.348,76.844],[68.027,77.073],[67.704,77.298],[67.378,77.521]],area:5750.66003449999}],bbox:[-0,0,86.189,84.959],area:5750.66003449999},{cls:"cls-1",contours:[{pts:[[59.85,79.24],[59.489,79.4],[59.126,79.556],[58.762,79.708],[58.397,79.856],[58.031,80.001],[57.664,80.142],[57.296,80.279],[56.926,80.413],[56.556,80.543],[56.185,80.669],[55.812,80.791],[55.439,80.91],[55.064,81.026],[54.689,81.137],[54.312,81.245],[53.935,81.35],[53.557,81.451],[53.178,81.548],[52.798,81.642],[52.417,81.733],[52.036,81.82],[51.653,81.903],[51.27,81.983],[50.886,82.059],[50.502,82.133],[50.116,82.202],[49.73,82.269],[49.344,82.331],[48.956,82.391],[48.568,82.447],[48.178,82.5],[47.788,82.549],[47.398,82.594],[47.007,82.634],[46.617,82.671],[46.226,82.703],[45.834,82.732],[45.443,82.757],[45.051,82.777],[44.66,82.794],[44.268,82.807],[43.876,82.816],[43.484,82.82],[43.093,82.822],[42.701,82.819],[42.309,82.812],[41.917,82.802],[41.526,82.787],[41.134,82.769],[40.743,82.747],[40.352,82.722],[39.961,82.692],[39.57,82.659],[39.18,82.623],[38.79,82.582],[38.4,82.538],[38.011,82.49],[37.621,82.439],[37.233,82.384],[36.844,82.325],[36.457,82.263],[36.065,82.196],[35.673,82.126],[35.282,82.052],[34.893,81.974],[34.505,81.894],[34.119,81.809],[33.734,81.721],[33.351,81.63],[32.969,81.535],[32.588,81.436],[32.209,81.334],[31.831,81.229],[31.455,81.12],[31.08,81.007],[30.707,80.891],[30.335,80.772],[29.964,80.649],[29.595,80.523],[29.227,80.393],[28.861,80.26],[28.497,80.123],[28.133,79.983],[27.772,79.839],[27.411,79.692],[27.053,79.542],[26.695,79.388],[26.339,79.231],[25.985,79.07],[25.632,78.906],[25.281,78.739],[24.931,78.568],[24.582,78.394],[24.235,78.216],[23.89,78.035],[23.546,77.851],[23.204,77.663],[22.863,77.472],[22.523,77.278],[22.185,77.08],[21.849,76.879],[21.514,76.675],[21.181,76.467],[20.849,76.256],[20.519,76.041],[20.19,75.824],[19.863,75.603],[19.537,75.378],[19.213,75.151],[18.89,74.92],[18.569,74.685],[18.255,74.452],[17.946,74.218],[17.639,73.98],[17.333,73.739],[17.029,73.494],[16.727,73.245],[16.426,72.993],[16.128,72.738],[15.831,72.479],[15.537,72.218],[15.244,71.953],[14.954,71.685],[14.667,71.414],[14.382,71.14],[14.099,70.863],[13.819,70.584],[13.542,70.302],[13.267,70.017],[12.996,69.73],[12.727,69.44],[12.462,69.148],[12.2,68.854],[11.941,68.558],[11.685,68.259],[11.433,67.959],[11.185,67.657],[10.94,67.352],[10.699,67.046],[10.461,66.738],[10.228,66.429],[9.999,66.118],[9.778,65.797],[9.56,65.47],[9.343,65.144],[9.125,64.818],[8.908,64.491],[8.69,64.165],[8.472,63.838],[8.255,63.512],[8.037,63.186],[7.82,62.859],[7.617,62.525],[7.421,62.186],[7.228,61.845],[7.039,61.503],[6.853,61.158],[6.67,60.812],[6.491,60.463],[6.315,60.113],[6.143,59.761],[5.974,59.407],[5.809,59.052],[5.647,58.695],[5.489,58.336],[5.334,57.976],[5.182,57.614],[5.035,57.251],[4.891,56.886],[4.75,56.519],[4.613,56.152],[4.479,55.783],[4.35,55.412],[4.223,55.041],[4.101,54.668],[3.982,54.294],[3.866,53.918],[3.755,53.542],[3.647,53.164],[3.542,52.786],[3.442,52.406],[3.345,52.026],[3.252,51.644],[3.162,51.262],[3.076,50.879],[2.994,50.495],[2.916,50.11],[2.842,49.725],[2.771,49.339],[2.704,48.952],[2.641,48.564],[2.582,48.176],[2.527,47.788],[2.475,47.399],[2.427,47.009],[2.383,46.619],[2.344,46.229],[2.307,45.838],[2.275,45.447],[2.247,45.056],[2.223,44.665],[2.202,44.273],[2.186,43.881],[2.174,43.489],[2.165,43.097],[2.161,42.705],[2.16,42.313],[2.163,41.918],[2.169,41.524],[2.178,41.132],[2.191,40.74],[2.208,40.349],[2.228,39.958],[2.252,39.568],[2.28,39.179],[2.312,38.79],[2.348,38.401],[2.388,38.012],[2.432,37.624],[2.48,37.235],[2.533,36.846],[2.59,36.457],[2.651,36.067],[2.716,35.677],[2.786,35.29],[2.86,34.904],[2.936,34.519],[3.016,34.135],[3.099,33.752],[3.186,33.369],[3.277,32.988],[3.37,32.607],[3.468,32.228],[3.569,31.849],[3.673,31.472],[3.782,31.096],[3.894,30.72],[4.009,30.346],[4.129,29.973],[4.252,29.601],[4.379,29.23],[4.51,28.86],[4.645,28.492],[4.784,28.124],[4.927,27.758],[5.074,27.394],[5.225,27.03],[5.38,26.667],[5.539,26.306],[5.7,25.947],[5.866,25.59],[6.034,25.235],[6.206,24.881],[6.381,24.529],[6.56,24.179],[6.741,23.831],[6.926,23.485],[7.115,23.14],[7.306,22.798],[7.501,22.458],[7.699,22.12],[7.9,21.783],[8.105,21.449],[8.312,21.117],[8.523,20.787],[8.737,20.459],[8.954,20.133],[9.174,19.81],[9.398,19.488],[9.624,19.169],[9.853,18.852],[10.086,18.538],[10.321,18.225],[10.56,17.915],[10.802,17.608],[11.046,17.302],[11.294,16.999],[11.545,16.699],[11.798,16.401],[12.055,16.105],[12.314,15.812],[12.577,15.521],[12.842,15.233],[13.11,14.948],[13.381,14.665],[13.655,14.384],[13.932,14.107],[14.211,13.832],[14.494,13.559],[14.779,13.289],[15.067,13.022],[15.358,12.758],[15.651,12.497],[15.947,12.238],[16.246,11.982],[16.548,11.729],[16.853,11.479],[17.155,11.236],[17.457,10.997],[17.762,10.761],[18.069,10.527],[18.379,10.296],[18.692,10.067],[19.007,9.842],[19.324,9.618],[19.644,9.398],[19.966,9.18],[20.29,8.965],[20.617,8.753],[20.946,8.544],[21.277,8.338],[21.611,8.134],[21.946,7.933],[22.284,7.736],[22.623,7.541],[22.965,7.349],[23.308,7.161],[23.654,6.975],[24.001,6.793],[24.351,6.613],[24.702,6.437],[25.055,6.264],[25.41,6.094],[25.766,5.928],[26.125,5.765],[26.484,5.605],[26.846,5.448],[27.209,5.295],[27.574,5.145],[27.94,4.998],[28.307,4.855],[28.676,4.716],[29.047,4.58],[29.419,4.447],[29.792,4.318],[30.166,4.193],[30.542,4.071],[30.919,3.953],[31.297,3.839],[31.676,3.728],[32.057,3.621],[32.438,3.518],[32.821,3.419],[33.204,3.324],[33.589,3.232],[33.974,3.144],[34.361,3.06],[34.748,2.98],[35.136,2.905],[35.523,2.833],[35.91,2.765],[36.297,2.701],[36.684,2.641],[37.072,2.585],[37.46,2.531],[37.848,2.482],[38.237,2.435],[38.626,2.391],[39.016,2.35],[39.407,2.311],[39.797,2.275],[40.178,2.243],[40.562,2.215],[40.947,2.191],[41.334,2.172],[41.723,2.156],[42.113,2.145],[42.505,2.137],[42.898,2.133],[43.292,2.133],[43.687,2.137],[44.083,2.145],[44.48,2.157],[44.876,2.173],[45.273,2.192],[45.671,2.215],[46.068,2.242],[46.464,2.272],[46.861,2.306],[47.257,2.344],[47.652,2.385],[48.046,2.43],[48.44,2.479],[48.832,2.531],[49.223,2.586],[49.612,2.645],[50,2.707],[50.385,2.773],[50.769,2.842],[51.151,2.914],[51.53,2.99],[51.907,3.069],[52.281,3.151],[52.655,3.238],[53.04,3.329],[53.423,3.424],[53.803,3.522],[54.182,3.623],[54.559,3.728],[54.935,3.836],[55.309,3.947],[55.682,4.062],[56.054,4.182],[56.425,4.305],[56.795,4.432],[57.164,4.564],[57.533,4.7],[57.901,4.84],[58.269,4.984],[58.634,5.131],[58.998,5.28],[59.36,5.432],[59.72,5.587],[60.079,5.745],[60.435,5.906],[60.79,6.07],[61.143,6.237],[61.495,6.409],[61.845,6.583],[62.193,6.762],[62.54,6.944],[62.885,7.13],[63.228,7.32],[63.57,7.515],[63.911,7.713],[64.255,7.918],[64.6,8.127],[64.941,8.337],[65.278,8.549],[65.611,8.763],[65.941,8.979],[66.267,9.196],[66.59,9.416],[66.91,9.638],[67.227,9.862],[67.541,10.088],[67.852,10.317],[68.16,10.549],[68.466,10.783],[68.769,11.021],[69.071,11.261],[69.369,11.504],[69.666,11.75],[69.961,12],[70.254,12.253],[70.545,12.509],[70.835,12.769],[71.123,13.033],[71.41,13.3],[71.696,13.572],[71.98,13.847],[72.264,14.127],[72.547,14.41],[72.829,14.699],[73.109,14.99],[73.379,15.277],[73.647,15.565],[73.911,15.857],[74.172,16.15],[74.43,16.447],[74.685,16.746],[74.937,17.047],[75.185,17.35],[75.431,17.656],[75.674,17.965],[75.913,18.276],[76.149,18.588],[76.382,18.904],[76.612,19.221],[76.839,19.541],[77.063,19.863],[77.283,20.187],[77.5,20.513],[77.714,20.841],[77.925,21.172],[78.132,21.504],[78.336,21.839],[78.537,22.175],[78.734,22.513],[78.928,22.854],[79.119,23.196],[79.306,23.54],[79.49,23.886],[79.671,24.234],[79.848,24.583],[80.022,24.935],[80.192,25.288],[80.359,25.643],[80.522,25.999],[80.682,26.357],[80.838,26.717],[80.991,27.078],[81.14,27.441],[81.286,27.806],[81.428,28.172],[81.567,28.539],[81.699,28.909],[81.82,29.282],[81.941,29.655],[82.062,30.029],[82.183,30.402],[82.304,30.775],[82.425,31.148],[82.542,31.523],[82.644,31.903],[82.744,32.283],[82.842,32.663],[82.938,33.043],[83.03,33.423],[83.119,33.804],[83.205,34.185],[83.288,34.567],[83.366,34.95],[83.44,35.334],[83.51,35.72],[83.575,36.107],[83.635,36.496],[83.69,36.886],[83.739,37.278],[83.784,37.668],[83.826,38.059],[83.864,38.45],[83.899,38.841],[83.929,39.233],[83.957,39.625],[83.98,40.017],[84,40.409],[84.017,40.801],[84.029,41.193],[84.038,41.585],[84.044,41.977],[84.045,42.369],[84.043,42.761],[84.037,43.153],[84.028,43.545],[84.015,43.937],[83.997,44.329],[83.977,44.72],[83.952,45.111],[83.924,45.502],[83.891,45.892],[83.855,46.282],[83.815,46.672],[83.771,47.061],[83.724,47.45],[83.672,47.838],[83.617,48.226],[83.557,48.614],[83.494,49.001],[83.427,49.387],[83.355,49.772],[83.28,50.157],[83.201,50.542],[83.118,50.925],[83.031,51.308],[82.94,51.69],[82.844,52.071],[82.745,52.454],[82.641,52.841],[82.534,53.225],[82.424,53.607],[82.311,53.987],[82.195,54.364],[82.076,54.739],[81.954,55.112],[81.829,55.482],[81.7,55.851],[81.568,56.218],[81.433,56.582],[81.294,56.945],[81.152,57.306],[81.006,57.665],[80.857,58.023],[80.705,58.379],[80.549,58.733],[80.389,59.086],[80.225,59.438],[80.058,59.788],[79.887,60.137],[79.712,60.484],[79.534,60.831],[79.351,61.176],[79.165,61.521],[78.974,61.864],[78.78,62.207],[78.581,62.548],[78.379,62.889],[78.172,63.229],[77.961,63.569],[77.746,63.907],[77.531,64.238],[77.314,64.566],[77.094,64.892],[76.871,65.216],[76.646,65.537],[76.418,65.855],[76.187,66.172],[75.954,66.486],[75.717,66.797],[75.477,67.107],[75.235,67.414],[74.989,67.718],[74.74,68.021],[74.488,68.321],[74.233,68.618],[73.974,68.914],[73.712,69.207],[73.445,69.5],[73.176,69.789],[72.904,70.076],[72.63,70.36],[72.354,70.64],[72.075,70.918],[71.795,71.193],[71.512,71.465],[71.226,71.734],[70.939,72],[70.649,72.263],[70.357,72.523],[70.063,72.78],[69.766,73.034],[69.467,73.285],[69.166,73.533],[68.863,73.778],[68.557,74.02],[68.25,74.26],[67.94,74.496],[67.628,74.729],[67.313,74.959],[66.996,75.187],[66.678,75.411],[66.357,75.632],[66.033,75.851],[65.708,76.066],[65.38,76.279],[65.05,76.488],[64.718,76.695],[64.384,76.898],[64.048,77.099],[63.709,77.296],[63.369,77.491],[63.026,77.682],[62.681,77.871],[62.334,78.056],[61.984,78.239],[61.633,78.419],[61.279,78.595],[60.924,78.769],[60.566,78.939],[60.206,79.107]],area:5187.7103904999985}],bbox:[2.16,2.133,84.045,82.822],area:5187.7103904999985},{cls:"cls-2",contours:[{pts:[[49.48,79.53],[49.094,79.595],[48.708,79.656],[48.321,79.712],[47.932,79.765],[47.543,79.814],[47.153,79.858],[46.763,79.898],[46.372,79.935],[45.98,79.967],[45.588,79.995],[45.195,80.019],[44.802,80.039],[44.409,80.055],[44.016,80.067],[43.622,80.075],[43.228,80.079],[42.835,80.079],[42.441,80.075],[42.047,80.066],[41.654,80.054],[41.261,80.038],[40.868,80.018],[40.475,79.994],[40.083,79.966],[39.691,79.934],[39.3,79.898],[38.91,79.858],[38.52,79.814],[38.13,79.767],[37.742,79.715],[37.354,79.659],[36.968,79.6],[36.582,79.536],[36.198,79.469],[35.814,79.398],[35.427,79.322],[35.04,79.241],[34.655,79.157],[34.274,79.07],[33.894,78.978],[33.516,78.883],[33.139,78.784],[32.763,78.681],[32.387,78.574],[32.011,78.463],[31.635,78.349],[31.258,78.23],[30.881,78.109],[30.509,77.985],[30.138,77.857],[29.769,77.724],[29.402,77.588],[29.037,77.447],[28.673,77.303],[28.311,77.154],[27.951,77.001],[27.592,76.845],[27.234,76.684],[26.878,76.519],[26.523,76.351],[26.169,76.179],[25.816,76.003],[25.465,75.824],[25.114,75.641],[24.767,75.455],[24.422,75.267],[24.08,75.074],[23.739,74.878],[23.401,74.679],[23.065,74.476],[22.731,74.27],[22.399,74.061],[22.07,73.848],[21.743,73.631],[21.419,73.411],[21.096,73.188],[20.776,72.962],[20.458,72.733],[20.143,72.5],[19.83,72.264],[19.52,72.025],[19.212,71.782],[18.906,71.537],[18.603,71.288],[18.302,71.037],[18.004,70.782],[17.708,70.524],[17.414,70.264],[17.124,70],[16.835,69.733],[16.55,69.464],[16.266,69.191],[15.986,68.916],[15.708,68.638],[15.432,68.357],[15.16,68.073],[14.891,67.787],[14.629,67.503],[14.37,67.215],[14.112,66.924],[13.858,66.629],[13.606,66.331],[13.356,66.029],[13.109,65.725],[12.865,65.417],[12.623,65.106],[12.385,64.793],[12.149,64.476],[11.916,64.157],[11.687,63.835],[11.46,63.51],[11.237,63.183],[11.017,62.854],[10.801,62.522],[10.588,62.188],[10.379,61.852],[10.173,61.514],[9.971,61.173],[9.773,60.832],[9.579,60.488],[9.389,60.142],[9.203,59.795],[9.021,59.447],[8.843,59.097],[8.669,58.745],[8.5,58.393],[8.335,58.039],[8.175,57.684],[8.019,57.328],[7.868,56.972],[7.722,56.614],[7.574,56.245],[7.43,55.878],[7.288,55.512],[7.151,55.146],[7.017,54.779],[6.887,54.411],[6.762,54.042],[6.643,53.669],[6.528,53.293],[6.42,52.913],[6.315,52.532],[6.213,52.152],[6.116,51.773],[6.022,51.393],[5.933,51.013],[5.847,50.632],[5.765,50.249],[5.687,49.866],[5.612,49.48],[5.542,49.093],[5.475,48.702],[5.413,48.308],[5.355,47.914],[5.301,47.52],[5.252,47.127],[5.207,46.734],[5.166,46.341],[5.13,45.948],[5.098,45.556],[5.07,45.164],[5.046,44.772],[5.027,44.381],[5.012,43.99],[5.001,43.599],[4.994,43.208],[4.992,42.818],[4.994,42.428],[5.001,42.039],[5.011,41.649],[5.026,41.26],[5.045,40.872],[5.069,40.483],[5.096,40.095],[5.128,39.708],[5.164,39.321],[5.205,38.934],[5.249,38.547],[5.298,38.161],[5.351,37.775],[5.409,37.389],[5.471,37.004],[5.536,36.619],[5.607,36.235],[5.681,35.85],[5.76,35.467],[5.842,35.083],[5.93,34.7],[6.021,34.317],[6.116,33.935],[6.216,33.553],[6.32,33.172],[6.428,32.79],[6.541,32.41],[6.657,32.029],[6.778,31.649],[6.902,31.274],[7.029,30.906],[7.16,30.539],[7.295,30.173],[7.434,29.808],[7.577,29.443],[7.725,29.08],[7.876,28.718],[8.032,28.357],[8.191,27.998],[8.355,27.64],[8.522,27.284],[8.693,26.929],[8.868,26.575],[9.047,26.224],[9.229,25.874],[9.415,25.526],[9.605,25.18],[9.798,24.836],[9.994,24.494],[10.195,24.154],[10.398,23.817],[10.605,23.482],[10.816,23.149],[11.029,22.818],[11.246,22.491],[11.466,22.165],[11.69,21.843],[11.916,21.523],[12.146,21.206],[12.378,20.892],[12.614,20.581],[12.852,20.273],[13.094,19.967],[13.342,19.661],[13.593,19.357],[13.847,19.056],[14.104,18.758],[14.364,18.463],[14.627,18.17],[14.892,17.88],[15.161,17.594],[15.432,17.31],[15.706,17.029],[15.983,16.75],[16.262,16.475],[16.544,16.203],[16.829,15.933],[17.117,15.667],[17.407,15.404],[17.7,15.143],[17.995,14.886],[18.293,14.632],[18.594,14.381],[18.897,14.133],[19.202,13.887],[19.51,13.646],[19.821,13.407],[20.134,13.171],[20.449,12.939],[20.767,12.71],[21.087,12.484],[21.409,12.261],[21.734,12.041],[22.061,11.825],[22.39,11.612],[22.721,11.402],[23.055,11.196],[23.391,10.993],[23.729,10.793],[24.069,10.597],[24.411,10.404],[24.755,10.214],[25.102,10.028],[25.45,9.846],[25.801,9.666],[26.153,9.491],[26.508,9.318],[26.865,9.149],[27.223,8.983],[27.583,8.822],[27.945,8.664],[28.308,8.51],[28.672,8.359],[29.037,8.213],[29.404,8.071],[29.772,7.932],[30.141,7.798],[30.511,7.667],[30.883,7.54],[31.255,7.417],[31.629,7.298],[32.004,7.183],[32.38,7.072],[32.757,6.965],[33.134,6.862],[33.513,6.762],[33.893,6.667],[34.273,6.575],[34.654,6.488],[35.037,6.404],[35.42,6.324],[35.803,6.248],[36.188,6.176],[36.573,6.108],[36.959,6.044],[37.345,5.984],[37.732,5.928],[38.12,5.876],[38.508,5.827],[38.897,5.783],[39.286,5.742],[39.676,5.706],[40.066,5.673],[40.456,5.645],[40.847,5.62],[41.238,5.599],[41.63,5.583],[42.022,5.57],[42.414,5.561],[42.806,5.556],[43.198,5.555],[43.591,5.558],[43.984,5.565],[44.376,5.576],[44.769,5.591],[45.162,5.61],[45.555,5.633],[45.948,5.659],[46.341,5.69],[46.734,5.725],[47.126,5.764],[47.519,5.806],[47.911,5.853],[48.302,5.904],[48.69,5.959],[49.078,6.019],[49.465,6.083],[49.851,6.151],[50.236,6.224],[50.621,6.301],[51.005,6.382],[51.389,6.467],[51.771,6.556],[52.153,6.649],[52.533,6.746],[52.913,6.846],[53.292,6.951],[53.669,7.059],[54.046,7.17],[54.421,7.286],[54.796,7.404],[55.169,7.526],[55.542,7.652],[55.914,7.782],[56.285,7.916],[56.654,8.054],[57.021,8.195],[57.386,8.34],[57.749,8.489],[58.111,8.641],[58.471,8.797],[58.829,8.957],[59.185,9.12],[59.54,9.288],[59.892,9.458],[60.243,9.633],[60.592,9.811],[60.939,9.993],[61.284,10.178],[61.627,10.367],[61.968,10.559],[62.307,10.756],[62.645,10.955],[62.98,11.159],[63.313,11.366],[63.645,11.576],[63.974,11.79],[64.301,12.008],[64.627,12.229],[64.95,12.453],[65.273,12.684],[65.595,12.917],[65.914,13.154],[66.231,13.393],[66.545,13.636],[66.855,13.881],[67.164,14.129],[67.469,14.38],[67.771,14.634],[68.071,14.891],[68.368,15.15],[68.661,15.412],[68.952,15.677],[69.24,15.944],[69.525,16.215],[69.808,16.488],[70.087,16.763],[70.363,17.041],[70.636,17.322],[70.906,17.606],[71.173,17.891],[71.437,18.18],[71.698,18.471],[71.956,18.765],[72.21,19.061],[72.462,19.359],[72.71,19.66],[72.955,19.964],[73.197,20.269],[73.436,20.578],[73.671,20.888],[73.903,21.201],[74.132,21.516],[74.358,21.834],[74.58,22.154],[74.799,22.476],[75.014,22.801],[75.227,23.127],[75.435,23.456],[75.641,23.787],[75.843,24.12],[76.041,24.456],[76.236,24.793],[76.428,25.133],[76.616,25.475],[76.8,25.819],[76.981,26.165],[77.158,26.513],[77.332,26.863],[77.502,27.215],[77.669,27.569],[77.832,27.924],[77.991,28.282],[78.147,28.642],[78.299,29.004],[78.447,29.367],[78.591,29.733],[78.732,30.1],[78.869,30.469],[79.002,30.84],[79.132,31.213],[79.257,31.587],[79.379,31.963],[79.496,32.341],[79.61,32.721],[79.72,33.102],[79.826,33.485],[79.929,33.87],[80.027,34.256],[80.121,34.641],[80.21,35.026],[80.294,35.411],[80.373,35.796],[80.447,36.181],[80.517,36.566],[80.582,36.952],[80.642,37.338],[80.699,37.725],[80.75,38.112],[80.798,38.501],[80.842,38.891],[80.881,39.282],[80.916,39.674],[80.948,40.068],[80.976,40.462],[81,40.856],[81.019,41.25],[81.034,41.644],[81.045,42.038],[81.052,42.431],[81.054,42.825],[81.052,43.218],[81.046,43.611],[81.036,44.004],[81.021,44.396],[81.002,44.788],[80.979,45.179],[80.952,45.57],[80.921,45.961],[80.885,46.351],[80.845,46.741],[80.801,47.13],[80.753,47.518],[80.7,47.906],[80.643,48.293],[80.583,48.68],[80.518,49.065],[80.448,49.45],[80.375,49.834],[80.298,50.218],[80.216,50.6],[80.13,50.981],[80.04,51.362],[79.946,51.742],[79.848,52.12],[79.746,52.498],[79.64,52.874],[79.529,53.249],[79.415,53.624],[79.296,53.997],[79.173,54.368],[79.047,54.739],[78.916,55.108],[78.781,55.476],[78.642,55.843],[78.499,56.208],[78.352,56.572],[78.2,56.935],[78.045,57.295],[77.886,57.655],[77.723,58.013],[77.555,58.369],[77.384,58.724],[77.209,59.077],[77.029,59.428],[76.846,59.778],[76.659,60.126],[76.467,60.472],[76.273,60.815],[76.075,61.155],[75.875,61.493],[75.67,61.828],[75.463,62.162],[75.252,62.493],[75.038,62.823],[74.82,63.15],[74.6,63.474],[74.376,63.797],[74.149,64.117],[73.918,64.435],[73.685,64.75],[73.448,65.063],[73.208,65.374],[72.965,65.682],[72.718,65.987],[72.469,66.29],[72.217,66.591],[71.961,66.888],[71.703,67.184],[71.441,67.476],[71.177,67.766],[70.909,68.053],[70.639,68.337],[70.365,68.618],[70.089,68.896],[69.81,69.172],[69.528,69.445],[69.243,69.714],[68.955,69.981],[68.664,70.245],[68.371,70.505],[68.074,70.763],[67.775,71.017],[67.474,71.268],[67.169,71.516],[66.862,71.761],[66.552,72.002],[66.239,72.24],[65.923,72.477],[65.604,72.71],[65.284,72.94],[64.962,73.166],[64.639,73.389],[64.313,73.609],[63.986,73.825],[63.657,74.038],[63.326,74.247],[62.994,74.453],[62.659,74.655],[62.322,74.855],[61.983,75.05],[61.642,75.243],[61.299,75.432],[60.954,75.618],[60.607,75.8],[60.257,75.979],[59.905,76.155],[59.549,76.322],[59.188,76.477],[58.828,76.632],[58.467,76.787],[58.106,76.943],[57.746,77.098],[57.385,77.253],[57.025,77.408],[56.659,77.552],[56.291,77.69],[55.922,77.824],[55.552,77.954],[55.181,78.081],[54.809,78.203],[54.436,78.323],[54.062,78.438],[53.687,78.55],[53.31,78.658],[52.933,78.762],[52.554,78.862],[52.174,78.959],[51.793,79.052],[51.411,79.141],[51.027,79.227],[50.643,79.308],[50.256,79.386],[49.869,79.46]],area:4442.924105999992}],bbox:[4.992,5.555,81.054,80.079],area:4442.924105999992},{cls:"cls-3",contours:[{pts:[[18.14,37.13],[18.496,36.947],[18.828,36.738],[19.139,36.506],[19.435,36.255],[19.72,35.989],[19.998,35.712],[20.289,35.443],[20.607,35.216],[20.952,35.043],[21.324,34.935],[21.721,34.9],[22.113,34.935],[22.491,35.027],[22.851,35.17],[23.191,35.362],[23.509,35.595],[23.803,35.865],[24.067,36.156],[24.304,36.463],[24.521,36.786],[24.722,37.12],[24.913,37.465],[25.099,37.816],[25.279,38.162],[25.451,38.509],[25.614,38.863],[25.768,39.23],[25.912,39.613],[26.046,39.99],[26.17,40.363],[26.282,40.733],[26.384,41.102],[26.473,41.471],[26.551,41.842],[26.617,42.217],[26.67,42.596],[26.71,42.981],[26.738,43.374],[26.751,43.776],[26.751,44.189],[26.743,44.585],[26.735,44.977],[26.726,45.369],[26.718,45.761],[26.71,46.153],[26.701,46.545],[26.693,46.937],[26.688,47.328],[26.698,47.719],[26.725,48.109],[26.769,48.499],[26.828,48.887],[26.902,49.272],[26.991,49.656],[27.094,50.036],[27.212,50.412],[27.343,50.783],[27.487,51.15],[27.644,51.512],[27.814,51.868],[27.996,52.217],[28.189,52.559],[28.393,52.893],[28.609,53.219],[28.834,53.537],[29.07,53.845],[29.315,54.143],[29.57,54.438],[29.827,54.734],[30.084,55.03],[30.341,55.326],[30.598,55.622],[30.863,55.913],[31.098,56.227],[31.258,56.579],[31.331,56.956],[31.307,57.344],[31.177,57.724],[30.96,58.045],[30.689,58.332],[30.409,58.608],[30.13,58.883],[29.851,59.158],[29.572,59.433],[29.293,59.709],[29.026,59.975],[28.762,60.246],[28.497,60.532],[28.233,60.831],[27.973,61.142],[27.72,61.462],[27.478,61.792],[27.251,62.13],[27.041,62.474],[26.851,62.824],[26.685,63.177],[26.546,63.534],[26.438,63.892],[26.363,64.251],[26.335,64.64],[26.308,65.031],[26.281,65.422],[26.254,65.813],[26.227,66.204],[26.199,66.598],[26.165,66.992],[26.123,67.384],[26.073,67.772],[26.013,68.157],[25.942,68.54],[25.858,68.92],[25.76,69.297],[25.648,69.672],[25.518,70.045],[25.357,70.402],[25.155,70.737],[24.919,71.049],[24.654,71.338],[24.34,71.613],[24,71.794],[23.646,71.868],[23.281,71.84],[22.907,71.713],[22.541,71.501],[22.215,71.281],[21.893,71.057],[21.577,70.828],[21.265,70.595],[20.956,70.358],[20.65,70.116],[20.347,69.87],[20.045,69.619],[19.745,69.365],[19.445,69.106],[19.147,68.844],[18.851,68.58],[18.559,68.314],[18.271,68.045],[17.985,67.774],[17.703,67.5],[17.424,67.224],[17.149,66.946],[16.877,66.665],[16.608,66.381],[16.343,66.095],[16.08,65.806],[15.822,65.515],[15.566,65.221],[15.314,64.924],[15.065,64.624],[14.819,64.322],[14.577,64.016],[14.338,63.708],[14.102,63.397],[13.87,63.083],[13.641,62.767],[13.415,62.447],[13.193,62.124],[12.974,61.799],[12.758,61.47],[12.546,61.138],[12.337,60.803],[12.131,60.465],[11.922,60.113],[11.719,59.762],[11.522,59.414],[11.331,59.068],[11.146,58.724],[10.967,58.381],[10.793,58.038],[10.625,57.694],[10.46,57.35],[10.301,57.004],[10.145,56.657],[9.993,56.306],[9.845,55.953],[9.7,55.596],[9.558,55.234],[9.418,54.868],[9.281,54.496],[9.146,54.118],[9.012,53.733],[8.882,53.348],[8.761,52.973],[8.644,52.599],[8.532,52.223],[8.426,51.847],[8.324,51.469],[8.227,51.091],[8.135,50.711],[8.047,50.331],[7.964,49.949],[7.884,49.565],[7.81,49.18],[7.739,48.794],[7.672,48.406],[7.609,48.017],[7.551,47.628],[7.496,47.24],[7.446,46.851],[7.401,46.462],[7.359,46.072],[7.323,45.683],[7.29,45.293],[7.262,44.902],[7.239,44.512],[7.22,44.121],[7.206,43.73],[7.196,43.339],[7.192,42.948],[7.191,42.556],[7.196,42.165],[7.205,41.773],[7.219,41.381],[7.238,40.989],[7.262,40.597],[7.29,40.205],[7.324,39.813],[7.362,39.421],[7.406,39.03],[7.454,38.639],[7.507,38.249],[7.564,37.86],[7.625,37.472],[7.69,37.085],[7.76,36.699],[7.834,36.314],[7.913,35.93],[7.996,35.548],[8.083,35.166],[8.174,34.785],[8.269,34.406],[8.369,34.027],[8.473,33.65],[8.582,33.275],[8.694,32.9],[8.811,32.527],[8.932,32.155],[9.057,31.784],[9.187,31.415],[9.32,31.047],[9.458,30.681],[9.6,30.316],[9.746,29.952],[9.896,29.591],[10.05,29.23],[10.209,28.871],[10.371,28.514],[10.538,28.159],[10.709,27.805],[10.884,27.453],[11.065,27.098],[11.249,26.746],[11.437,26.397],[11.628,26.052],[11.822,25.709],[12.019,25.37],[12.219,25.034],[12.423,24.701],[12.63,24.371],[12.84,24.043],[13.054,23.718],[13.271,23.396],[13.491,23.077],[13.715,22.76],[13.943,22.446],[14.174,22.134],[14.409,21.824],[14.647,21.517],[14.89,21.211],[15.135,20.908],[15.385,20.608],[15.639,20.309],[15.896,20.012],[16.157,19.717],[16.422,19.424],[16.691,19.132],[16.964,18.842],[17.239,18.557],[17.515,18.277],[17.795,18],[18.077,17.728],[18.362,17.459],[18.65,17.193],[18.942,16.931],[19.236,16.672],[19.532,16.417],[19.832,16.166],[20.134,15.917],[20.439,15.672],[20.747,15.43],[21.057,15.191],[21.37,14.956],[21.685,14.723],[22.003,14.494],[22.323,14.267],[22.646,14.044],[22.97,13.823],[23.311,13.609],[23.677,13.466],[24.05,13.418],[24.421,13.469],[24.783,13.626],[25.111,13.867],[25.407,14.122],[25.689,14.391],[25.955,14.675],[26.207,14.973],[26.444,15.286],[26.666,15.612],[26.874,15.95],[27.072,16.288],[27.27,16.627],[27.468,16.965],[27.666,17.303],[27.864,17.641],[28.062,17.979],[28.261,18.318],[28.459,18.656],[28.661,19.001],[28.869,19.355],[29.075,19.702],[29.28,20.042],[29.485,20.377],[29.692,20.705],[29.901,21.027],[30.113,21.343],[30.33,21.653],[30.552,21.959],[30.781,22.258],[31.017,22.553],[31.262,22.843],[31.516,23.128],[31.781,23.408],[32.058,23.684],[32.347,23.955],[32.65,24.223],[32.968,24.487],[33.301,24.744],[33.623,24.967],[33.946,25.19],[34.268,25.413],[34.591,25.636],[34.913,25.858],[35.236,26.081],[35.562,26.299],[35.89,26.514],[36.218,26.728],[36.545,26.943],[36.873,27.158],[37.201,27.373],[37.529,27.588],[37.858,27.804],[38.18,28.027],[38.491,28.263],[38.788,28.516],[39.071,28.79],[39.334,29.085],[39.573,29.396],[39.787,29.722],[39.977,30.061],[40.145,30.413],[40.29,30.776],[40.413,31.149],[40.516,31.529],[40.598,31.918],[40.65,32.313],[40.667,32.705],[40.646,33.093],[40.587,33.475],[40.488,33.849],[40.347,34.214],[40.161,34.562],[39.908,34.855],[39.595,35.087],[39.239,35.259],[38.856,35.368],[38.468,35.407],[38.083,35.378],[37.706,35.285],[37.344,35.133],[37,34.925],[36.68,34.692],[36.384,34.442],[36.108,34.173],[35.847,33.884],[35.598,33.576],[35.358,33.266],[35.117,32.956],[34.875,32.648],[34.633,32.342],[34.389,32.036],[34.142,31.733],[33.894,31.432],[33.642,31.132],[33.386,30.835],[33.126,30.541],[32.862,30.249],[32.595,29.961],[32.327,29.686],[32.053,29.414],[31.771,29.148],[31.481,28.886],[31.185,28.63],[30.882,28.38],[30.573,28.136],[30.258,27.899],[29.936,27.669],[29.609,27.446],[29.276,27.231],[28.938,27.024],[28.592,26.826],[28.241,26.64],[27.885,26.468],[27.526,26.309],[27.162,26.162],[26.795,26.029],[26.425,25.909],[26.051,25.803],[25.674,25.709],[25.295,25.629],[24.913,25.563],[24.529,25.509],[24.143,25.469],[23.755,25.443],[23.365,25.43],[22.975,25.43],[22.583,25.444],[22.191,25.472],[21.798,25.513],[21.405,25.568],[21.012,25.636],[20.622,25.701],[20.235,25.762],[19.848,25.822],[19.46,25.882],[19.073,25.942],[18.682,25.967],[18.297,25.91],[17.921,25.796],[17.553,25.656],[17.191,25.508],[16.83,25.356],[16.469,25.204],[16.107,25.052],[15.745,24.901],[15.379,24.768],[15.007,24.659],[14.629,24.574],[14.242,24.512],[13.847,24.471],[13.705,24.683],[13.776,25.073],[13.859,25.458],[13.95,25.837],[14.046,26.214],[14.146,26.59],[14.247,26.965],[14.346,27.342],[14.428,27.729],[14.449,28.121],[14.365,28.499],[14.216,28.86],[14.049,29.209],[13.865,29.553],[13.668,29.9],[13.471,30.24],[13.275,30.58],[13.08,30.919],[12.884,31.259],[12.688,31.599],[12.492,31.938],[12.297,32.278],[12.101,32.618],[11.905,32.957],[11.71,33.297],[11.514,33.636],[11.318,33.976],[11.122,34.316],[10.927,34.655],[10.731,34.995],[10.535,35.334],[10.339,35.674],[10.142,36.013],[9.946,36.352],[9.749,36.693],[9.57,37.039],[9.418,37.399],[9.299,37.782],[9.248,38.172],[9.265,38.558],[9.349,38.932],[9.497,39.285],[9.71,39.611],[9.986,39.901],[10.312,40.152],[10.658,40.366],[11.019,40.542],[11.389,40.679],[11.767,40.776],[12.149,40.833],[12.531,40.848],[12.909,40.821],[13.281,40.75],[13.642,40.635],[13.989,40.475],[14.318,40.268],[14.627,40.015],[14.906,39.714],[15.133,39.395],[15.361,39.076],[15.588,38.757],[15.818,38.435],[16.073,38.136],[16.384,37.907],[16.741,37.745],[17.098,37.584],[17.456,37.423],[17.813,37.262]],area:794.5355095000009}],bbox:[7.191,13.418,40.667,71.868],area:794.5355095000009},{cls:"cls-3",contours:[{pts:[[29.53,75.25],[29.343,74.946],[29.425,74.561],[29.515,74.18],[29.609,73.8],[29.709,73.421],[29.815,73.045],[29.927,72.67],[30.045,72.298],[30.17,71.927],[30.302,71.559],[30.441,71.193],[30.587,70.83],[30.741,70.469],[30.904,70.111],[31.075,69.755],[31.254,69.402],[31.445,69.055],[31.65,68.719],[31.868,68.394],[32.099,68.08],[32.341,67.775],[32.594,67.478],[32.857,67.19],[33.129,66.908],[33.409,66.631],[33.697,66.36],[33.991,66.096],[34.291,65.842],[34.595,65.597],[34.905,65.36],[35.219,65.13],[35.539,64.907],[35.864,64.69],[36.193,64.479],[36.527,64.273],[36.867,64.07],[37.207,63.873],[37.545,63.676],[37.884,63.479],[38.224,63.281],[38.563,63.08],[38.894,62.87],[39.216,62.649],[39.527,62.413],[39.825,62.161],[40.107,61.89],[40.373,61.596],[40.615,61.283],[40.83,60.954],[41.013,60.61],[41.159,60.25],[41.267,59.874],[41.365,59.494],[41.463,59.115],[41.561,58.735],[41.648,58.361],[41.728,57.974],[41.816,57.586],[41.927,57.209],[42.074,56.852],[42.274,56.527],[42.539,56.245],[42.881,56.021],[43.243,55.876],[43.616,55.764],[43.997,55.68],[44.389,55.619],[44.779,55.568],[45.168,55.516],[45.557,55.464],[45.945,55.412],[46.334,55.361],[46.722,55.309],[47.111,55.257],[47.275,55.502],[47.333,55.892],[47.4,56.279],[47.477,56.664],[47.565,57.045],[47.663,57.423],[47.774,57.796],[47.897,58.166],[48.033,58.532],[48.184,58.893],[48.35,59.249],[48.531,59.601],[48.725,59.945],[48.93,60.28],[49.143,60.607],[49.364,60.928],[49.592,61.244],[49.826,61.556],[50.065,61.865],[50.309,62.174],[50.555,62.484],[50.803,62.794],[51.045,63.102],[51.274,63.416],[51.486,63.742],[51.674,64.088],[51.833,64.455],[51.943,64.83],[52.004,65.21],[52.02,65.593],[51.99,65.978],[51.919,66.363],[51.806,66.747],[51.661,67.12],[51.504,67.48],[51.334,67.832],[51.153,68.176],[50.962,68.515],[50.76,68.848],[50.548,69.177],[50.327,69.502],[50.097,69.824],[49.86,70.144],[49.62,70.456],[49.377,70.762],[49.129,71.061],[48.874,71.354],[48.608,71.64],[48.33,71.919],[48.047,72.196],[47.774,72.478],[47.502,72.76],[47.229,73.041],[46.956,73.323],[46.684,73.605],[46.411,73.886],[46.157,74.184],[45.923,74.499],[45.703,74.826],[45.5,75.165],[45.317,75.514],[45.155,75.873],[45.017,76.24],[44.906,76.614],[44.822,76.994],[44.77,77.379],[44.75,77.769],[44.444,77.878],[44.048,77.897],[43.656,77.909],[43.265,77.916],[42.876,77.917],[42.487,77.913],[42.099,77.904],[41.71,77.891],[41.32,77.873],[40.928,77.851],[40.534,77.826],[40.14,77.797],[39.747,77.763],[39.356,77.725],[38.965,77.683],[38.575,77.637],[38.186,77.587],[37.798,77.532],[37.41,77.473],[37.024,77.41],[36.638,77.342],[36.254,77.271],[35.87,77.195],[35.487,77.114],[35.105,77.03],[34.724,76.941],[34.345,76.848],[33.966,76.751],[33.588,76.65],[33.211,76.544],[32.836,76.434],[32.461,76.32],[32.088,76.202],[31.716,76.079],[31.344,75.952],[30.974,75.821],[30.606,75.686],[30.238,75.546],[29.872,75.403]],area:298.943843999999}],bbox:[29.343,55.257,52.02,77.917],area:298.943843999999},{cls:"cls-3",contours:[{pts:[[52.36,76.66],[52.36,76.268],[52.36,75.875],[52.365,75.482],[52.433,75.091],[52.522,74.709],[52.632,74.336],[52.763,73.97],[52.914,73.612],[53.084,73.26],[53.274,72.915],[53.481,72.576],[53.71,72.255],[53.942,71.939],[54.175,71.623],[54.407,71.307],[54.64,70.99],[54.872,70.674],[55.105,70.358],[55.337,70.042],[55.57,69.726],[55.802,69.409],[56.032,69.091],[56.261,68.772],[56.49,68.453],[56.718,68.134],[56.947,67.815],[57.176,67.497],[57.405,67.178],[57.621,66.848],[57.805,66.504],[57.96,66.148],[58.09,65.778],[58.196,65.396],[58.271,64.999],[58.304,64.608],[58.294,64.223],[58.241,63.843],[58.148,63.465],[58.014,63.089],[57.865,62.725],[57.716,62.362],[57.568,61.998],[57.419,61.635],[57.271,61.272],[57.122,60.908],[56.974,60.545],[56.826,60.17],[56.692,59.796],[56.571,59.42],[56.466,59.044],[56.378,58.666],[56.31,58.286],[56.262,57.905],[56.237,57.52],[56.237,57.133],[56.263,56.743],[56.316,56.349],[56.399,55.954],[56.499,55.582],[56.621,55.208],[56.764,54.836],[56.927,54.468],[57.111,54.109],[57.314,53.762],[57.537,53.43],[57.781,53.117],[58.043,52.826],[58.325,52.56],[58.625,52.324],[58.945,52.12],[59.285,51.951],[59.655,51.828],[60.042,51.77],[60.432,51.782],[60.815,51.872],[61.173,52.04],[61.492,52.265],[61.782,52.529],[62.051,52.816],[62.31,53.111],[62.568,53.407],[62.825,53.704],[63.083,54],[63.341,54.296],[63.598,54.592],[63.852,54.869],[64.124,55.13],[64.413,55.377],[64.717,55.615],[65.033,55.844],[65.359,56.067],[65.691,56.286],[66.026,56.504],[66.363,56.722],[66.698,56.944],[67.028,57.171],[67.351,57.405],[67.663,57.649],[67.963,57.905],[68.248,58.173],[68.517,58.456],[68.768,58.754],[68.996,59.071],[69.198,59.41],[69.366,59.765],[69.502,60.115],[69.621,60.478],[69.724,60.852],[69.812,61.235],[69.886,61.626],[69.947,62.022],[69.995,62.421],[70.031,62.824],[70.057,63.226],[70.072,63.627],[70.078,64.025],[70.075,64.419],[70.064,64.806],[70.047,65.185],[69.993,65.584],[69.829,65.912],[69.574,66.219],[69.309,66.508],[69.041,66.795],[68.769,67.079],[68.494,67.359],[68.216,67.636],[67.934,67.909],[67.65,68.18],[67.362,68.447],[67.072,68.71],[66.778,68.971],[66.482,69.228],[66.182,69.481],[65.88,69.731],[65.575,69.978],[65.267,70.222],[64.957,70.462],[64.644,70.698],[64.328,70.931],[64.01,71.161],[63.689,71.387],[63.366,71.61],[63.04,71.829],[62.712,72.044],[62.382,72.256],[62.049,72.465],[61.714,72.669],[61.377,72.871],[61.038,73.068],[60.697,73.262],[60.353,73.453],[60.008,73.639],[59.661,73.822],[59.311,74.002],[58.96,74.177],[58.607,74.349],[58.253,74.518],[57.896,74.682],[57.538,74.843],[57.178,75],[56.817,75.153],[56.454,75.302],[56.09,75.448],[55.724,75.589],[55.355,75.723],[54.98,75.84],[54.606,75.956],[54.231,76.072],[53.856,76.189],[53.481,76.305],[53.106,76.421],[52.731,76.538]],area:230.7377379999998}],bbox:[52.36,51.77,70.078,76.66],area:230.7377379999998},{cls:"cls-3",contours:[{pts:[[57.42,34.11],[57.047,34.231],[56.673,34.352],[56.3,34.472],[55.91,34.54],[55.521,34.506],[55.164,34.338],[54.89,34.081],[54.71,33.764],[54.609,33.403],[54.571,33.011],[54.581,32.602],[54.624,32.191],[54.682,31.791],[54.742,31.404],[54.801,31.016],[54.861,30.628],[54.92,30.24],[54.981,29.847],[55.051,29.446],[55.134,29.051],[55.236,28.667],[55.363,28.299],[55.522,27.954],[55.718,27.637],[55.959,27.353],[56.25,27.107],[56.598,26.905],[56.983,26.756],[57.359,26.651],[57.74,26.572],[58.126,26.514],[58.519,26.47],[58.911,26.432],[59.302,26.394],[59.692,26.356],[60.083,26.317],[60.474,26.279],[60.864,26.241],[61.255,26.203],[61.645,26.165],[62.036,26.127],[62.421,26.084],[62.805,26.023],[63.188,25.944],[63.57,25.849],[63.948,25.738],[64.323,25.611],[64.692,25.467],[65.054,25.309],[65.409,25.136],[65.755,24.948],[66.091,24.746],[66.416,24.53],[66.729,24.3],[67.037,24.051],[67.332,23.793],[67.617,23.527],[67.895,23.253],[68.169,22.973],[68.441,22.688],[68.71,22.403],[68.976,22.119],[69.24,21.833],[69.499,21.545],[69.756,21.251],[70.008,20.95],[70.258,20.64],[70.504,20.455],[70.755,20.757],[71.006,21.059],[71.257,21.361],[71.507,21.663],[71.75,21.972],[71.986,22.287],[72.219,22.605],[72.448,22.924],[72.674,23.246],[72.895,23.57],[73.113,23.897],[73.328,24.226],[73.538,24.557],[73.745,24.89],[73.948,25.225],[74.148,25.562],[74.343,25.902],[74.535,26.243],[74.723,26.587],[74.907,26.933],[75.087,27.28],[75.263,27.63],[75.435,27.982],[75.604,28.335],[75.768,28.691],[75.928,29.048],[76.085,29.407],[76.237,29.768],[76.385,30.131],[76.53,30.495],[76.67,30.862],[76.806,31.229],[76.937,31.599],[77.065,31.971],[77.189,32.343],[77.308,32.718],[77.423,33.094],[77.534,33.472],[77.641,33.851],[77.744,34.233],[77.844,34.615],[77.94,34.996],[78.031,35.377],[78.117,35.759],[78.197,36.141],[78.27,36.525],[78.336,36.911],[78.395,37.298],[78.444,37.689],[78.472,38.08],[78.457,38.473],[78.399,38.862],[78.298,39.24],[78.135,39.601],[77.896,39.907],[77.596,40.149],[77.248,40.321],[76.867,40.418],[76.469,40.439],[76.078,40.4],[75.699,40.307],[75.336,40.166],[74.991,39.978],[74.668,39.75],[74.358,39.506],[74.059,39.251],[73.769,38.988],[73.489,38.716],[73.217,38.435],[72.953,38.145],[72.691,37.852],[72.412,37.576],[72.133,37.3],[71.854,37.024],[71.573,36.75],[71.292,36.476],[71.011,36.202],[70.73,35.928],[70.443,35.658],[70.14,35.41],[69.824,35.181],[69.496,34.97],[69.158,34.771],[68.811,34.581],[68.451,34.425],[68.09,34.27],[67.73,34.116],[67.369,33.961],[67.008,33.806],[66.648,33.652],[66.265,33.566],[65.881,33.485],[65.496,33.405],[65.107,33.332],[64.718,33.269],[64.329,33.218],[63.939,33.177],[63.549,33.148],[63.159,33.129],[62.769,33.12],[62.38,33.123],[61.991,33.136],[61.603,33.159],[61.215,33.193],[60.828,33.238],[60.442,33.293],[60.056,33.359],[59.672,33.435],[59.289,33.521],[58.908,33.617],[58.527,33.724],[58.149,33.841],[57.772,33.968]],area:228.35169099999905}],bbox:[54.571,20.455,78.472,40.439],area:228.35169099999905},{cls:"cls-3",contours:[{pts:[[37.43,21.58],[37.048,21.446],[36.677,21.298],[36.317,21.136],[35.968,20.957],[35.63,20.763],[35.303,20.551],[34.987,20.322],[34.683,20.074],[34.389,19.808],[34.126,19.511],[33.88,19.202],[33.634,18.893],[33.389,18.584],[33.15,18.27],[32.92,17.949],[32.69,17.628],[32.472,17.3],[32.258,16.968],[32.044,16.636],[31.83,16.304],[31.616,15.972],[31.402,15.641],[31.185,15.311],[30.968,14.982],[30.751,14.652],[30.534,14.322],[30.317,13.992],[30.1,13.662],[29.883,13.329],[29.683,12.987],[29.505,12.637],[29.35,12.277],[29.229,11.893],[29.194,11.502],[29.264,11.122],[29.446,10.757],[29.696,10.46],[30,10.228],[30.346,10.046],[30.72,9.9],[31.091,9.767],[31.464,9.638],[31.838,9.513],[32.214,9.392],[32.591,9.275],[32.969,9.162],[33.348,9.053],[33.729,8.949],[34.111,8.848],[34.493,8.751],[34.877,8.659],[35.262,8.571],[35.648,8.487],[36.035,8.407],[36.422,8.331],[36.811,8.26],[37.2,8.193],[37.59,8.13],[37.98,8.071],[38.371,8.017],[38.763,7.967],[39.155,7.922],[39.548,7.881],[39.941,7.845],[40.335,7.812],[40.728,7.785],[41.122,7.762],[41.517,7.743],[41.911,7.729],[42.306,7.72],[42.7,7.715],[43.095,7.714],[43.49,7.719],[43.884,7.728],[44.279,7.741],[44.673,7.76],[45.067,7.783],[45.198,7.886],[44.871,8.131],[44.566,8.387],[44.282,8.655],[44.02,8.938],[43.78,9.241],[43.563,9.565],[43.352,9.905],[43.16,10.253],[42.991,10.608],[42.844,10.972],[42.72,11.342],[42.618,11.72],[42.539,12.104],[42.482,12.495],[42.447,12.892],[42.431,13.293],[42.43,13.691],[42.446,14.087],[42.478,14.479],[42.525,14.867],[42.589,15.253],[42.668,15.636],[42.762,16.017],[42.872,16.395],[42.997,16.771],[43.138,17.144],[43.274,17.516],[43.407,17.887],[43.541,18.258],[43.675,18.638],[43.703,19.031],[43.587,19.391],[43.375,19.723],[43.116,20.03],[42.839,20.33],[42.538,20.623],[42.228,20.886],[41.908,21.118],[41.58,21.321],[41.243,21.494],[40.897,21.637],[40.542,21.75],[40.18,21.834],[39.809,21.887],[39.43,21.911],[39.043,21.905],[38.648,21.87],[38.246,21.805],[37.836,21.711]],area:149.5351905000001}],bbox:[29.194,7.714,45.198,21.911],area:149.5351905000001},{cls:"cls-3",contours:[{pts:[[62.39,21.48],[62.041,21.556],[61.678,21.615],[61.303,21.656],[60.916,21.681],[60.521,21.692],[60.119,21.688],[59.712,21.672],[59.3,21.644],[58.887,21.604],[58.474,21.555],[58.063,21.497],[57.655,21.431],[57.252,21.358],[56.857,21.28],[56.47,21.196],[56.094,21.109],[55.73,21.018],[55.376,20.925],[55,20.812],[54.62,20.676],[54.245,20.516],[53.883,20.33],[53.543,20.115],[53.235,19.87],[52.967,19.594],[52.748,19.284],[52.586,18.938],[52.494,18.553],[52.492,18.164],[52.559,17.777],[52.67,17.396],[52.801,17.023],[52.933,16.651],[53.056,16.276],[53.173,15.899],[53.29,15.522],[53.407,15.145],[53.488,14.756],[53.539,14.362],[53.572,13.968],[53.588,13.576],[53.586,13.184],[53.567,12.793],[53.532,12.404],[53.479,12.017],[53.411,11.633],[53.326,11.25],[53.226,10.871],[53.11,10.494],[52.979,10.12],[52.833,9.751],[52.673,9.385],[52.498,9.023],[52.739,9.014],[53.125,9.13],[53.508,9.247],[53.888,9.368],[54.264,9.491],[54.638,9.617],[55.009,9.746],[55.378,9.878],[55.745,10.014],[56.11,10.154],[56.473,10.297],[56.835,10.444],[57.195,10.595],[57.555,10.751],[57.917,10.913],[58.277,11.081],[58.634,11.251],[58.988,11.425],[59.339,11.602],[59.688,11.782],[60.035,11.966],[60.379,12.153],[60.723,12.345],[61.064,12.541],[61.405,12.742],[61.745,12.947],[62.078,13.161],[62.407,13.379],[62.736,13.597],[63.065,13.815],[63.394,14.033],[63.723,14.251],[64.052,14.469],[64.374,14.696],[64.69,14.931],[65.004,15.167],[65.316,15.406],[65.626,15.647],[65.934,15.892],[66.24,16.14],[66.543,16.393],[66.844,16.65],[67.142,16.914],[67.333,17.191],[67.09,17.502],[66.848,17.814],[66.605,18.125],[66.363,18.437],[66.12,18.748],[65.878,19.059],[65.635,19.371],[65.38,19.679],[65.108,19.967],[64.82,20.233],[64.517,20.478],[64.198,20.701],[63.864,20.901],[63.516,21.079],[63.153,21.234],[62.776,21.365]],area:118.57799399999928}],bbox:[52.492,9.014,67.333,21.692],area:118.57799399999928},{cls:"cls-3",contours:[{pts:[[74.55,59.37],[74.56,58.959],[74.562,58.557],[74.554,58.163],[74.534,57.775],[74.499,57.392],[74.447,57.013],[74.376,56.636],[74.284,56.259],[74.168,55.881],[74.027,55.502],[73.858,55.118],[73.684,54.759],[73.511,54.402],[73.337,54.046],[73.164,53.69],[72.992,53.317],[72.844,52.938],[72.72,52.557],[72.621,52.173],[72.547,51.788],[72.498,51.403],[72.474,51.016],[72.476,50.631],[72.502,50.246],[72.555,49.862],[72.633,49.48],[72.737,49.101],[72.866,48.725],[73.022,48.353],[73.203,47.985],[73.417,47.641],[73.682,47.346],[73.985,47.092],[74.312,46.869],[74.65,46.668],[75.009,46.509],[75.384,46.399],[75.773,46.328],[76.177,46.289],[76.586,46.308],[76.97,46.403],[77.32,46.567],[77.63,46.793],[77.89,47.074],[78.095,47.403],[78.236,47.775],[78.305,48.182],[78.309,48.588],[78.279,48.979],[78.223,49.365],[78.149,49.754],[78.063,50.147],[77.973,50.534],[77.879,50.919],[77.781,51.303],[77.679,51.686],[77.573,52.067],[77.463,52.447],[77.348,52.825],[77.23,53.202],[77.107,53.578],[76.98,53.952],[76.848,54.325],[76.712,54.696],[76.571,55.066],[76.426,55.434],[76.276,55.801],[76.121,56.166],[75.962,56.53],[75.797,56.893],[75.624,57.25],[75.446,57.604],[75.267,57.958],[75.089,58.312],[74.91,58.665],[74.732,59.019]],area:45.39935499999933}],bbox:[72.474,46.289,78.309,59.37],area:45.39935499999933}];function S0(s,e){var t=e||{},n=.3,i=2.4,r=.92,o=.04,a="silver",c=Qc,l=43.1,h=42.48,u=.3;function d(G,q,ee){if(!ee)return[G,q];var D=Math.atan2(q,G),Q=Math.hypot(G,q),ge=1+ee*(.62*Math.sin(D*3+.7)+.34*Math.sin(D*5-2.2)+.19*Math.sin(D*8+1.9)+.11*Math.sin(D*13-.4));return[Math.cos(D)*Q*ge,Math.sin(D)*Q*ge]}function p(G,q,ee,D){ee=ee||1;for(var Q=new q,ge=0,Le=0,Ke=!1,Be=0;Be<G.length;Be++){var Qe=(G[Be][0]-l)*ee,it=(h-G[Be][1])*ee;if(D){var Yt=d(Qe,it,D);Qe=Yt[0],it=Yt[1]}Ke&&Math.abs(Qe-ge)<u&&Math.abs(it-Le)<u||(Ke?Q.lineTo(Qe,it):(Q.moveTo(Qe,it),Ke=!0),ge=Qe,Le=it)}return Q.closePath(),Q}function g(G,q,ee,D){for(var Q=p(G.contours[0].pts,sn,ee,D),ge=1;ge<G.contours.length;ge++)Q.holes.push(p(G.contours[ge].pts,Sn,ee,D));return(q||[]).forEach(function(Le){Q.holes.push(p(Le.contours[0].pts,Sn,ee,D))}),Q}function x(G,q){for(var ee=G.attributes.position,D=new Float32Array(ee.count*2),Q=0;Q<ee.count;Q++)D[Q*2]=ee.getX(Q)/q+.5,D[Q*2+1]=ee.getY(Q)/q+.5;G.setAttribute("uv",new $e(D,2))}function _(G,q,ee){for(var D=G.attributes.position,Q=new Float32Array(D.count*3),ge=0;ge<D.count;ge++){var Le=(D.getZ(ge)-q)/(ee-q);Le=Math.max(0,Math.min(1,(Le-.3)/.55));var Ke=.3+.7*(Le*Le*(3-2*Le));Q[ge*3]=Q[ge*3+1]=Q[ge*3+2]=Ke}G.setAttribute("color",new $e(Q,3))}var m;try{m=new Ge({canvas:s,antialias:!0,alpha:!0,powerPreference:"high-performance",preserveDrawingBuffer:!!t.preserve})}catch(G){return t.onError&&t.onError(G),{dispose:function(){}}}m.setPixelRatio(Math.min(devicePixelRatio||1,2)),m.outputEncoding=qe,m.toneMapping=Ha,m.toneMappingExposure=1.04;var f=new Ei,T=new ut(30,1,1,3e3),M=56,E=240,R=240;function L(){var G=T.fov*Math.PI/180,q=2*Math.atan(Math.tan(G/2)*T.aspect);return M/Math.sin(Math.min(G,q)/2)*1.1}T.position.set(0,0,E);function Z(G){var q=1024,ee=512,D=document.createElement("canvas");D.width=q,D.height=ee;var Q=D.getContext("2d"),ge=Q.createLinearGradient(0,0,0,ee);G?(ge.addColorStop(0,"#3d3a36"),ge.addColorStop(.42,"#1c1b1a"),ge.addColorStop(.53,"#0c0c0c"),ge.addColorStop(1,"#040404")):(ge.addColorStop(0,"#fdfdfc"),ge.addColorStop(.4,"#d8d6d2"),ge.addColorStop(.53,"#8b8884"),ge.addColorStop(1,"#3a3836")),Q.fillStyle=ge,Q.fillRect(0,0,q,ee);function Le(Be,Qe,it,Yt,Us,Ii){var Vn=Q.createRadialGradient(Be,Qe,0,Be,Qe,it);Vn.addColorStop(0,Us),Vn.addColorStop(1,"rgba(0,0,0,0)"),Q.save(),Q.globalAlpha=Ii,Q.translate(Be,Qe),Q.scale(1,Yt/it),Q.translate(-Be,-Qe),Q.fillStyle=Vn,Q.beginPath(),Q.arc(Be,Qe,it,0,6.2832),Q.fill(),Q.restore()}Le(q*.22,ee*.2,330,200,"#ffffff",1),Le(q*.7,ee*.3,240,150,"#cfe1ff",.55),Le(q*.5,ee*.04,440,140,"#fff8ee",.4),Le(q*.93,ee*.6,190,120,"#ffd9a8",.3);var Ke=new fr(D);return Ke.mapping=ji,Ke.encoding=qe,Ke}var ce=new Si(m);ce.compileEquirectangularShader();var $=null;function y(G){var q=Z(G),ee=ce.fromEquirectangular(q);$&&$.dispose(),$=ee,f.environment=ee.texture,q.dispose()}var C=new Hn(16773850,2.3);C.position.set(-80,95,130);var I=new Hn(12177663,1.25);I.position.set(100,-25,-95);var N=new Hn(16777215,.5);N.position.set(25,-90,55);var B=new wr(16777215,.14);f.add(C,I,N,B);var F=new _r,U=F.load(t.grain);U.wrapS=U.wrapT=Nn,U.encoding=qe,U.anisotropy=m.capabilities.getMaxAnisotropy();var j=F.load(t.grain);j.wrapS=j.wrapT=Nn;var he=F.load(t.normal);he.wrapS=he.wrapT=Nn,he.anisotropy=U.anisotropy;var k={electrum:{hi:16773839,lo:2760984},gold:{hi:16763256,lo:3023123},silver:{hi:16054008,lo:1974308}},Y=new On({map:U,normalMap:he,roughnessMap:j,vertexColors:!0,metalness:1,roughness:.27,normalScale:new K(.5,.5),envMapIntensity:1.35}),re=new On({map:U,normalMap:he,roughnessMap:j,metalness:.6,roughness:.7,normalScale:new K(.85,.85),envMapIntensity:.8});(function(){var G=k[a],q=new xe(G.hi),ee=new xe(G.lo);Y.color.copy(q),Y.roughness=.24+.06*r,re.color.copy(q).lerp(ee,r).multiplyScalar(1-.38*r),re.roughness=.3+.5*r,re.metalness=1-.46*r,re.envMapIntensity=1.35-.72*r})();var fe={"cls-1":[],"cls-2":[],"cls-3":[]};c.forEach(function(G){fe[G.cls].push(G)}),fe["cls-2"].sort(function(G,q){return q.area-G.area});var _e=fe["cls-2"][0],H=fe["cls-2"][1],Ne=fe["cls-1"][0],ve=fe["cls-3"],we=6.6,de=1.6,Ce=1.8,Ee=we/2+de,X=1.8,ie=.36,te=new Ot,ue=new Ot;ue.add(te),f.add(ue),function(q){var ee=1.09+q*1.6,D=new on(g(_e,null,ee,q),{depth:we,bevelEnabled:!0,bevelThickness:de,bevelSize:Ce,bevelOffset:0,bevelSegments:8,curveSegments:8});D.translate(0,0,-we/2),x(D,34),D.computeVertexNormals(),te.add(new ct(D,re)),M=43.1*ee*(1+q*1.26)+3}(o);function ae(G){var q=new Ot,ee={depth:X,bevelEnabled:!0,bevelThickness:ie,bevelSize:ie*.92,bevelOffset:0,bevelSegments:4,curveSegments:6};return[g(_e,[Ne]),g(H,ve)].forEach(function(D){var Q=new on(D,ee);x(Q,34),_(Q,-ie,X+ie),Q.computeVertexNormals(),q.add(new ct(Q,Y))}),q.position.z=G*Ee,q.scale.z=G*i,G<0&&(q.scale.x=-1),q}te.add(ae(1),ae(-1));var Se=matchMedia("(prefers-reduced-motion: reduce)").matches,pe={spin:Se?0:n,drag:!1,vx:0,vy:0,px:0,py:0},De=-.15,Ve=0;function Ue(G){pe.drag=!0,pe.px=G.clientX,pe.py=G.clientY,s.classList.add("drag");try{s.setPointerCapture(G.pointerId)}catch{}}function b(G){pe.drag&&(pe.vx+=(G.clientX-pe.px)*55e-5,pe.vy+=(G.clientY-pe.py)*45e-5,pe.px=G.clientX,pe.py=G.clientY)}s.addEventListener("pointerdown",Ue),s.addEventListener("pointermove",b);function v(){pe.drag=!1,s.classList.remove("drag")}s.addEventListener("pointerup",v),s.addEventListener("pointercancel",v);function W(){var G=!1;y(G),m.toneMappingExposure=G?1.14:1.04,B.intensity=G?.1:.14}W();function ne(){var G=s.parentElement.getBoundingClientRect(),q=Math.max(1,G.width),ee=Math.max(1,G.height);m.setSize(q,ee,!1),T.aspect=q/ee,T.fov=q<640?34:30,T.updateProjectionMatrix(),R=L()}addEventListener("resize",ne),ne(),E=R;var me=window.ResizeObserver?new ResizeObserver(function(){ne()}):null;me&&me.observe(s.parentElement);var V=!0,Me=window.IntersectionObserver?new IntersectionObserver(function(G){V=G[0].isIntersecting},{threshold:0}):null;Me&&Me.observe(s);var ye=performance.now(),le=ye,oe=!1,Te=0,A=!1;return function G(q){if(!A){Te=requestAnimationFrame(G);var ee=Math.min((q-ye)/1e3,.05);if(ye=q,!(!V||s.parentElement.clientWidth<2)){var D=(q-le)/1e3;pe.drag||(De+=pe.spin*ee*1.15),De+=pe.vx,Ve+=pe.vy,pe.vx*=.94,pe.vy*=.94,te.rotation.y=De,te.rotation.x=Ve+Math.sin(D*.33)*.085,ue.rotation.z=Math.sin(D*.21)*.03,E+=(R-E)*.08,T.position.z=E,m.render(f,T),oe||(oe=!0,t.onReady&&t.onReady())}}}(ye),{dispose:function(){A=!0,cancelAnimationFrame(Te),removeEventListener("resize",ne),me&&me.disconnect(),Me&&Me.disconnect(),s.removeEventListener("pointerdown",Ue),s.removeEventListener("pointermove",b),s.removeEventListener("pointerup",v),s.removeEventListener("pointercancel",v),$&&$.dispose(),ce.dispose(),U.dispose(),j.dispose(),he.dispose(),m.dispose()}}}window.KWCoin={mount:S0};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2022 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
