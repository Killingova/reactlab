import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogFooter,
  Button,
} from "@chakra-ui/react";
import { useAlertContext } from "../context/alertContext";
import { useRef } from "react";

/**
 * This is a global component that uses context to display a global alert message.
 */
function Alert() {
  const { isOpen, type, message, onClose } = useAlertContext();
  const cancelRef = useRef();
  const isSuccess = type === "success";

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent
          py={6}
          px={4}
          borderRadius="md"
          boxShadow="lg"
          backgroundColor={isSuccess ? "green.100" : "red.100"}
        >
          <AlertDialogHeader fontSize="lg" fontWeight="bold" color={isSuccess ? "green.800" : "red.800"}>
            {isSuccess ? "✅ Erfolgreich!" : "❌ Fehler!"}
          </AlertDialogHeader>
          <AlertDialogBody color="gray.700" fontSize="md">
            {message}
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button colorScheme={isSuccess ? "green" : "red"} onClick={onClose}>
              OK
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}

export default Alert;
