.text 0x00400000
.globl main
main:
jal pepe

pepe:
	add $t0, $t0, $t0
	jr $ra