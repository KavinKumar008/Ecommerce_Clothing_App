"use client";

import Modal from "@/components/ui/Modal";
import AuthFormSession from "@/components/sections/AuthFormSession";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/ScrollArea";


interface AuthModalProps {
  isOpen: boolean;
  onClose: (open: boolean) => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      maxWidth="md"
      className="p-0"
      title="Authentication"
      description="Sign in or create an account to AURA"
    >
      <ScrollArea className="h-[70vh]">

        <AuthFormSession onSuccess={() => onClose(false)} />
      </ScrollArea>

    </Modal>
  );
}
