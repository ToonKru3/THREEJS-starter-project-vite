#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

#define PI 3.14159265359

// Plot a line on Y using a value between 0.0-1.0
float plot(vec2 st , float pct) {    
    return  smoothstep( pct- 0.02 , pct, st.y) - smoothstep( pct, pct + 0.02 , st.y);
    // return smoothstep(0.02, 0.0, abs(st.y - st.x));
}

void main() 
{
    // White 1.0
    // Black 0.0
	vec2 st = gl_FragCoord.xy/u_resolution;
    float y = 1.0 - pow(abs(st.x),0.5);
    // float y = pow(cos(PI * (st.x - 0.5) / 2.0), 0.5);
    // float y = 1.0 - pow(abs(sin(PI * (st.x - 0.5)/ 2.0)),0.5);
    // float y = pow(min(cos(PI * (st.x-0.5) /2.0), 1.0 - abs(st.x-0.5)), 0.5);
    // float y = 1.0 - pow(max(0.0 , abs(st.x ) * 2.0 - 1.0), 0.5);


    vec3 color = vec3(y);


    // Plot a line
    float pct = plot(st, y);
    color = (1.0-pct)*color+pct*vec3(0.0,1.0,0.0);

	gl_FragColor = vec4(color,1.0);
}
