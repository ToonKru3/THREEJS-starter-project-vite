#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;

vec3 colorA = vec3(0.149, 0.141, 0.912);
vec3 colorB = vec3(1.00, 0.833, 0.224);

void main()
{
    vec3 color = vec3(0.0);

    float pct = abs(sin(u_time));
    color = mix(colorA, colorB, pct);
    gl_FragColor = vec4(color, 1.0);
}