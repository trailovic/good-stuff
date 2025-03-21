import { useTranslation } from "react-i18next";

import { Globe } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '../../components/ui/dropdown-menu';

function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    const languages = [
        { label: 'Norsk', code: 'no' },
        { label: 'English', code: 'en' }
    ];

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className='flex items-center gap-2 border px-3 py-2 rounded-md text-sm cursor-pointer'>
                <Globe size={18} />
                {languages.find(lang => lang.code === i18n.language)?.label || 'Language'}
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
                {languages.map(lang => (
                <DropdownMenuItem
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`cursor-pointer ${i18n.language === lang.code ? 'bg-muted font-medium' : ''}`}
                >
                    {lang.label}
                </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default LanguageSwitcher;