    LIST P=16F84A
    INCLUDE <P16F84A.INC>

    ORG 0x00
    START
    MOVLW 0x01         ; Initialize counter with 1
    MOVWF 0x20         ; Store counter in register 0x20

LOOP
    MOVF 0x20, W       ; Move the current counter value to W
    CALL CHECK_FIVE
    CALL CHECK_SEVEN
    INCF 0x20, F       ; Increment the counter
    MOVF 0x20, W       ; Move counter back to W
    SUBLW 0x64         ; Compare W with 100
    BTFSS STATUS,Z     ; Skip if result is zero (W == 100)
    GOTO LOOP

    END                ; Program ends here

CHECK_FIVE
    MOVF 0x20, W
    ANDLW 0x05
    BTFSS STATUS,Z
    RETLW 0

CHECK_SEVEN
    MOVF 0x20, W
    ANDLW 0x07
    BTFSS STATUS,Z
RETLW 0
