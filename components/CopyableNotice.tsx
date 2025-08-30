"use client";

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface CopyableNoticeProps {
  children: React.ReactNode;
  copyText?: string;
  title?: string;
}

export default function CopyableNotice({ children, copyText, title }: CopyableNoticeProps) {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const textToCopy = copyText || (typeof children === 'string' ? children : 'Notice content');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      toast({
        title: "Copied!",
        description: "Notice copied to clipboard for alliance chat.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Please try copying manually.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="my-6 rounded-lg border-l-4 border-primary bg-primary/5 p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 text-sm">
          {children}
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleCopy}
          className="shrink-0 h-8 w-8 p-0 hover:bg-primary/10"
          title="Copy to clipboard"
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-600" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      </div>
    </div>
  );
}
